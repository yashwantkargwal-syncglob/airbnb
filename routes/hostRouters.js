const express = require("express");
const { homeController } = require('../controller/home');
const hostRouters = express.Router();

hostRouters.get("/add-home",homeController.getAddHome);
hostRouters.post("/add-home",homeController.postAddHome);

exports.hostRouters = hostRouters;