def order_model(order_id, user_email, diameter, length, thickness, state):
    order = {
        'order_id': order_id,
        'user_email': user_email,
        'diameter': diameter,
        'length': length,
        'thickness': thickness,
        'state': state
    }
    return order