const getPageNotFound = (req,res,next)=>{
    res.status(404)
    res.render('404',{pageTitle: "Not Found"})
}

exports.errorController = {
    getPageNotFound
}