let express = require("express");

const { MongoClient } = require('mongodb');

let app = express();
app.use(express.json());

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'vipuldb';

app.get("/readApi", (req, res) => {
  
});

app.post("/insert",async(req,res)=>{
  res.send("insert done")
})

app.listen("8000")