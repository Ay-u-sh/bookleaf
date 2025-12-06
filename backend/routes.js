const express = require('express');
const router = express.Router();

const businessRoutes = require('./business/business.routes');
const bookingRoutes = require('./booking/booking.routes');

router.use('/', businessRoutes);
router.use('/', bookingRoutes);

module.exports = router;
