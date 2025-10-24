const path = require('path')
const express = require("express");
const hostRouters = express.Router();

const houses = [];

hostRouters.get("/add-home",(req,res,next)=>{
    res.render('addHome', {pageTitle: "Add Home"})
})

hostRouters.post("/add-home",(req,res,next)=>{
    houses.push({houseName: req.body.houseName})
    res.render('homeAdd', {pageTitle: "Successfully"})
})

exports.hostRouters = hostRouters;
exports.houses = houses;