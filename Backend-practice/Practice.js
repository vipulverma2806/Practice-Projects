let express = require("express")
let app = express();
app.get("/",(req,res)=>{
    res.send("oooooooooooooo")
})
app.get("/vipul",(req,res)=>{
    res.send("hrjhrbje")
})
app.listen("8000")