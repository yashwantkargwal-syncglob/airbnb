const path = require('path');
const express = require("express");

const userRouter = express.Router();
const { House } = require("./hostRouters");

userRouter.use((req,res,next)=>{
    console.log(req.url,req.method);  
    next()  
})

userRouter.get("/",async(req,res,next)=>{
    try {
        const houses = await House.find(); // fetch from MongoDB
        res.render('home', {houses: houses, pageTitle : "airbnb | Home"})
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching houses.");
    }
})

module.exports = userRouter;