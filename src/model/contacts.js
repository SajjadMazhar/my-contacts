const mongoose = require("mongoose");
const validator = require("validator")

contactSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
        unique:true,
        minlength:8
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw Error("Please enter a valid email!");
            }
        }
    }
})

const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact; 