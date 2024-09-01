const express = require('express');
const router = express.Router();
const testData = require('../testData.js');
//import testData from "./testData.js";

// Para crear IDs nuevas
function randomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

router.get('/getOrders',(req,res) => {
    res.send({ data: testData.orders });
})

router.get('/getOrder/:id',(req,res) => {
    res.send({ data: testData.orders.find((order) => order.id === req.params.id) });
})

router.get('/getUserData/:id',(req,res) => {
    res.send({ data: testData.usersProfiles.find((user) => user.id === req.params.id) });
})

router.get('/getRequest/:id',(req,res) => {
    res.send({ data: testData.requests.find((r) => r.id === req.params.id) });
})

router.get('/getUserElement/:id',(req,res) => {
    res.send({ data: testData.usersElementsForQuotations.find((elem) => elem.id === req.params.id) });
})

router.get('/getUserElements/:id',(req,res) => {
    res.send({ data: testData.usersElementsForQuotations.filter((elem) => elem.idUser === req.params.id) });
})


router.post('/registerUser',(req,res) => {
    let user = {
        ...req.body.user,
        id: randomString(16)
    }
    testData.usersProfiles.push(user)
    res.send({ data: user });
})

router.post('/createOrder',(req,res) => {
    let order = {
        ...req.body.order,
        id: randomString(16)
    }
    testData.orders.push(order)
    res.send({ data: order });
})


router.put('/updateOrder',(req,res) => {
    testData.orders = testData.orders.map((order) => {
        if (order.id === req.body.id) {
            return {...order, ...req.body.edits}
        }
        return order
    })
    res.send({ data: testData.orders.find((order) => order.id === req.body.id) });
})

router.put('/updateUser',(req,res) => {
    testData.usersProfiles = testData.usersProfiles.map((user) => {
        if (user.id === req.body.id) {
            return {...user, ...req.body.edits}
        }
        return user
    })
    res.send({ data: testData.usersProfiles.find((user) => user.id === req.body.id) });
})

router.delete('/deleteUser',(req,res) => {
    testData.usersProfiles = testData.usersProfiles = testData.usersProfiles.filter((user) => user.id !== req.headers.id)
    res.send({ data: "hecho" });
})


module.exports = router;