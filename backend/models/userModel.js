const mongoose=require('../connection');
const schema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    dob:Date,
    mobile:Number,
    email:String,
    password:String
})
const model=mongoose.model('user',schema)
module.exports = model;