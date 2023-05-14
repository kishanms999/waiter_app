const express = require('express');

const orderController = require('../controllers/order');

const router = express.Router();

router.post('/add-order',orderController.insertOrder);

router.get('/get-orders',orderController.getOrders);

router.delete('/delete-order/:id',orderController.deleteOrder);

module.exports = router;