const path = require('path')
const express = require("express");
const hostRouters = express.Router();

hostRouters.get("/add-home",(req,res,next)=>{
    res.render('addHome', {pageTitle: "Add Home"})
})
const houses= [];
hostRouters.post("/add-home", async (req, res, next) => {
    houses.push({houseName: req.body.houseName})
        res.render('homeAdd', { pageTitle: "Successfully" });
});

exports.hostRouters = hostRouters;
exports.houses = houses;