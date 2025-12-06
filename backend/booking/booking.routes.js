const express = require('express')
const router = express.Router();
const bookingService = require('./booking.service');

router.post('/book',async(req,res)=>{
    const payload = req.body;
    const result = await bookingService.createBooking(payload);
    console.log(result);
    return res.status(200).json(result);
})

module.exports = router;