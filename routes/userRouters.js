const path = require('path');
const express = require("express");

const userRouter = express.Router();
const {houses} = require("./hostRouters");

userRouter.use((req,res,next)=>{
    console.log(req.url,req.method);  
    next()  
})

userRouter.get("/",(req,res,next)=>{
    res.render('home', {houses: houses, pageTitle : "airbnb | Home"})
})

module.exports = userRouter;