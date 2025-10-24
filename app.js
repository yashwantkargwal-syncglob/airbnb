const path = require('path')
const express = require("express");
const userRouter = require("./routes/userRouters");
const {hostRouters,houses} = require("./routes/hostRouters");

const app = express();

// serve static assets from /public (public/output.css will be available at /output.css)
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// set view engine before mounting routers so res.render() has a default engine
app.set("view engine","ejs");
app.set("views", path.join(__dirname, 'views'));

// mount routers after view engine is configured
app.use(userRouter);
app.use("/host", hostRouters);

app.use((req,res,next)=>{
    res.status(404)
    res.render('404',{pageTitle: "Not Found"})
})

const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`Server running on : http://localhost:${PORT}`);
})