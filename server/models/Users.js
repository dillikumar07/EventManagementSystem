const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String
})

const Usermodel = mongoose.model("users",userSchema);
module.exports = Usermodel;