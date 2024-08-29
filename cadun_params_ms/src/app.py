from flask import Flask, jsonify, request, Response
from flask_pymongo import PyMongo
from bson import json_util
import os

from models.order import order_model

app = Flask(__name__)
mongo_uri = os.environ.get('MONGO_URI')
print(mongo_uri)
if mongo_uri is None:
    raise Exception('MONGO_URI is not set')
app.config['MONGO_URI'] = mongo_uri
mongo = PyMongo(app)
mimetypeJSON = 'application/json'

# ---- PROFILES ROUTES ----

# DEFAULT GET

@app.route('/', methods=['GET'])
def default():
    dbs = mongo.db.list_collection_names()
    return jsonify({'message': 'Bienvenido al microservicio cadun_params_2_ms!!!',
                    'databases': dbs})

# --GET--: ALL ORDERS

@app.route('/orders', methods=['GET'])
def get_orders():
    orders = mongo.db.Orders.find()
    if orders == None:
        response = json_util.dumps({"message": "No hay pedidos registrados."})
        result = Response(response, status=204, mimetype=mimetypeJSON)
    else:
        response = json_util.dumps(orders)
        result = Response(response, status=200, mimetype=mimetypeJSON)
    return result


# --POST--: ORDER

@app.route('/orders', methods=['POST'])
def create_order():
    order_id = request.json['order_id']
    user_email = request.json['user_email']
    diameter = request.json['diameter']
    length = request.json['length']
    thickness = request.json['thickness']
    state = request.json['state']

    if order_id is not None and user_email is not None and diameter is not None and length is not None and thickness is not None and state is not None:
        mongo.db.Orders.insert_one(
            order_model(order_id, user_email, diameter, length, thickness, state)
        )
        response = order_model(
            order_id, user_email, diameter, length, thickness, state)

        return Response(response, status=201, mimetype=mimetypeJSON)
    else:
        return not_found()

# --GET--: ORDER

@app.route('/orders/<order_id>', methods=['GET'])
def get_order(order_id):
    order = mongo.db.Orders.find_one({'order_id': order_id})
    if order == None:
        response = json_util.dumps({"message": "Order not found."})
        result = Response(response, status=204, mimetype=mimetypeJSON)
    else:
        response = json_util.dumps(order)
        result = Response(response, status=200, mimetype=mimetypeJSON)
    return result

# --DELETE--: ORDER

@app.route('/orders/<order_id>', methods=['DELETE'])
def delete_order(order_id):
    order = mongo.db.Orders.find_one({'order_id': order_id})
    mongo.db.Orders.delete_one({'order_id': order_id})
    response = jsonify({'message': 'Order ' + order_id + ' (' + str(
        order['user_email']) + ')' + ' DELETED successfully.'})
    return response

# --PUT--: ORDER

@app.route('/orders/<order_id>', methods=['PUT'])
def update_order(order_id):
    user_email = request.json['user_email']
    diameter = request.json['diameter']
    length = request.json['length']
    thickness = request.json['thickness']
    state = request.json['state']

    if user_email or diameter or length or thickness or state:
        mongo.db.Orders.update_one({'order_id': order_id}, {'$set': {
            'user_email': user_email,
            'diameter': diameter,
            'length': length,
            'thickness': thickness,
            'state': state
        }})

        response = jsonify(
            {'message': 'Order ' + order_id + ' UPDATED successfully.'})
        return response

# ERROR HANDLING

@app.errorhandler(404)
def not_found(error=None):
    response = jsonify({
        'message': error,
        'status': 404
    })

    response.status_code = 404

    return response


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=4000, debug=True)
