const mongoose = require('mongoose')
const Schema = mongoose.Schema

const chatSchema = new Schema({
    userid:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    message:{
        type:String,
        required:true
    },
    sendingUser:{
        type:String
    }
})
const Chat = mongoose.model('Chat',chatSchema)
module.exports = Chat