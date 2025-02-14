


let checkToken = (req,res,next) =>{
    if(req.query.token === undefined){
        return res.send({
            status:0
        })
    }
    else if(req.query.token === process.env.MYToken  && req.query.pass === process.env.pass){
        return res.send({
            status:"okk1"
        })
    }
    next();
}
// app.use(checkToken)

module.exports = {checkToken}