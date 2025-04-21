const mongoose = require("mongoose");
const imageSchema = new mongoose.Schema({
    
    image:String
})
const imageModel = mongoose.model("upload_Image",imageSchema)
module.exports = imageModel;