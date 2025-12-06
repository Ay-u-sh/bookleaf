const express = require('express');
const router = express.Router();
const businessService = require('./business.service')

router.post('/register',async (req,res)=>{
    const payload = req.body;
    const result = await businessService.registerBusiness(payload);
    res.cookie('business',result);
    await businessService.sendBusinessVerificationEmail(result);
    res.status(200).json({message:'success'});
})

router.get('/verify',async(req,res)=>{
    const rawToken = req.query.token;
    const result = await businessService.verifyBusinessFromToken(rawToken);
    return res.status(200).json({status:200,message:'email verified'});
})

router.post('/generate-booking-link',async(req,res)=>{
    const business = req.cookies.business;
    console.log(business);
    const result = await businessService.createBookingLinkForBusiness(business);
    return res.status(200).json(result);

})

router.get('/business/:id',async(req,res)=>{
    const id = req.params.id;
    const result = await businessService.getBusinessDetails(id);
    return res.status(200).json(result);
})

module.exports = router;