const path = require('path');
const express = require("express");
const {houses} = require('./hostRouters')
const userRouter = express.Router();

userRouter.use((req,res,next)=>{
    console.log(req.url,req.method);  
    next()  
})

userRouter.get("/",async(req,res,next)=>{
        res.render('home', {houses: houses, pageTitle : "airbnb | Home"})
})

module.exports = userRouter;