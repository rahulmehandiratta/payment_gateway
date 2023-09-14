const express = require('express');
const router = express.Router();
const { 
// find,
createOrder,
verifyPayment
} = require('../controllers/razorpay');

// router.get('/', find);
router.get('/', createOrder);
router.post('/verifyPayment', verifyPayment);

module.exports = router;