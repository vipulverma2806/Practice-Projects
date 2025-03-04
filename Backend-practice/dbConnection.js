const {MongoClient} = require('mongodb')
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)

let dbConnection = async() =>{
 await client.connect();
 let db = client.db('vipverma');
 return db;
}
module.exports = {dbConnection}