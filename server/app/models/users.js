const mongoose = require('mongoose')
const Schema = mongoose.Schema
const isEmail = require('validator/lib/isEmail')

const userSChema = new Schema({
    username:{
        type:String,
        required:true,
        minlength:6,
        maxlength:64,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:{
            validator:function(value){
                return isEmail(value)
            },
            Message:function(){
                return 'invalid email or password'
            }
       }
    },
    password:{
        type:String,
        required:true,
        minlength: 8,
        maxlength:128
    } 
})

const User = mongoose.model('User',userSChema)
module.exports = User