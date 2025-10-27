const path = require('path');
const express = require("express");
const {houses} = require('./hostRouters');
const { homeController } = require('../controller/home');
const userRouter = express.Router();

userRouter.use(homeController.getConsoleLog)

userRouter.get("/",homeController.getHomePage)

module.exports = userRouter;