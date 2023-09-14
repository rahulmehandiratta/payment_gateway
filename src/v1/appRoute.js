const router = require('express').Router();

const razorpay = require('./routes/razorpay');

router.use('/razorpay', razorpay);

module.exports = router;