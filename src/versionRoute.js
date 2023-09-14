const router = require('express').Router();

const appRoute = require('./v1/appRoute');

router.use('/v1', appRoute);

module.exports = router;