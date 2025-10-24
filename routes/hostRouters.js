const path = require('path')
const express = require("express");
const mongoose = require('mongoose');
const hostRouters = express.Router();

const houses = [];
const houseSchema = new mongoose.Schema({
    houseName: {
        type: String,
        required: true
    }
});

const House= mongoose.model('houses',houseSchema);
hostRouters.get("/add-home",(req,res,next)=>{
    res.render('addHome', {pageTitle: "Add Home"})
})

hostRouters.post("/add-home", async (req, res, next) => {
    try {
        const newHouse = new House({ houseName: req.body.houseName });
        await newHouse.save(); // save to MongoDB
        res.render('homeAdd', { pageTitle: "Successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error saving house.");
    }
});

exports.hostRouters = hostRouters;
exports.houses = houses;
exports.House = House;