const express = require('express');
const router = express.Router();
const testData = require('../testData.js');
const axios = require('axios');
const endpointList = require('./routes.json')
let url
// Para crear IDs nuevas
// function randomString(length) {
//     let result = '';
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     const charactersLength = characters.length;
//     let counter = 0;
//     while (counter < length) {
//       result += characters.charAt(Math.floor(Math.random() * charactersLength));
//       counter += 1;
//     }
//     return result;
// }

router.get('/getOrders',(req,res) => {
    url = endpointList.getOrders.host + endpointList.getOrders.port + endpointList.getOrders.path
    axios.get(url)
        .then(function (response) {
            res.send(response.data);
        })
        .catch(function (error) {
            res.send(error);
        })
        .finally(function () {
        }); 
})

router.get('/getOrder/:id',(req,res) => {
    url = endpointList.getOrder.host + endpointList.getOrder.port + endpointList.getOrder.path
    axios.get(url + req.params.id)
        .then(function (response) {
            res.send(response.data);
        })
        .catch(function (error) {
            res.send(error);
        })
})

router.get('/getUserData/:id',(req,res) => {
    url = endpointList.getUserData.host + endpointList.getUserData.port + endpointList.getUserData.path
    axios.get(url + req.params.id)
        .then(function (response) {
            res.send(response.data);
        })
        .catch(function (error) {
            res.send(error);
        })
})

router.get('/getRequest/:id',(req,res) => {
    url = endpointList.getRequest.host + endpointList.getRequest.port + endpointList.getRequest.path
    axios.get(url + req.params.id)
        .then(function (response) {
            res.send(response.data);
        })
        .catch(function (error) {
            res.send(error);
        })
})

router.get('/getUserElement/:id',(req,res) => {
    url = endpointList.getUserElement.host + endpointList.getUserElement.port + endpointList.getUserElement.path
    axios.get(url + req.params.id)
        .then(function (response) {
            res.send(response.data);
        })
        .catch(function (error) {
            res.send(error);
        })
})

router.get('/getUserElements/:id',(req,res) => {
    url = endpointList.getUserElements.host + endpointList.getUserElements.port + endpointList.getUserElements.path
    axios.get(url + req.params.id)
        .then(function (response) {
            res.send(response.data);
        })
        .catch(function (error) {
            res.send(error);
        })
})


router.post('/registerUser',(req,res) => {
    url = endpointList.registerUser.host + endpointList.registerUser.port + endpointList.registerUser.path
    axios.post(url,req.body)
        .then(function (response) {
            res.send(response.data);
        })
        .catch(function (error) {
            res.send(error);
        })
})

router.post('/createOrder',(req,res) => {
    url = endpointList.createOrder.host + endpointList.createOrder.port + endpointList.createOrder.path
    axios.post(url,req.body)
        .then(function (response) {
            res.send(response.data);
        })
        .catch(function (error) {
            res.send(error);
        })
})


router.put('/updateOrder',(req,res) => {
    url = endpointList.updateOrder.host + endpointList.updateOrder.port + endpointList.updateOrder.path
    axios.put(url,req.body)
        .then(function (response) {
            res.send(response.data);
        })
        .catch(function (error) {
            res.send(error);
        })
})

router.put('/updateUser',(req,res) => {
    url = endpointList.updateUser.host + endpointList.updateUser.port + endpointList.updateUser.path
    axios.put(url,req.body)
        .then(function (response) {
            res.send(response.data);
        })
        .catch(function (error) {
            res.send(error);
        })
})

router.delete('/deleteUser',(req,res) => {
    url = endpointList.deleteUser.host + endpointList.deleteUser.port + endpointList.deleteUser.path
    axios.delete(url,{ headers: { id: req.headers.id } })
        .then(function (response) {
            res.send(response.data);
        })
        .catch(function (error) {
            res.send(error);
        })
})


module.exports = router;