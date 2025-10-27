const path = require('path')
const express = require("express");
const userRouter = require("./routes/userRouters");
const {hostRouters,houses} = require("./routes/hostRouters");
const { errorController } = require('./controller/error');

const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.set("view engine","ejs");
app.set("views", path.join(__dirname, 'views'));

app.use(userRouter);
app.use("/host", hostRouters);

app.use(errorController.getPageNotFound);

const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`Server running on : http://localhost:${PORT}`);
})