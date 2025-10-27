const Home = require("../models/houses");

const getAddHome = (req,res,next)=>{
    res.render('addHome', {pageTitle: "Add Home"})
}

const postAddHome =  async (req, res, next) => {
    const {houseName,price,location,rating,photo}= req.body;
    const home = new Home(houseName,price,location,rating,photo);
    home.save();
    res.render('homeAdd', { pageTitle: "Successfully" });
}

const getHomePage = async(req,res,next)=>{
    res.render('home', {houses: Home.fetchAll(), pageTitle : "ghar dekhiye Project | Home"})
}

const getConsoleLog = (req,res,next)=>{
    console.log(req.url,req.method);  
    next()  
}

exports.homeController = {
    getAddHome, postAddHome, getHomePage, getConsoleLog
}