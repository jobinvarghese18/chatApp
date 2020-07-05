const mongoose = require('mongoose')
const Chat = require('../models/chat')
const chatController = {}

chatController.create = (req,res)=>{
    const body = req.body
    body.sendingUser = req.user.username
    const chat = new Chat(body)
    chat.save()
    .then((chat)=>{
        res.json(chat)
    })
    .catch((err)=>{
        res.json(err)
    })
}
 chatController.list = (req,res)=>{
     const id = req.params.id
     Chat.find({ userid:id})
     .then((chats)=>{
         res.json(chats)
     })
     .catch((err)=>{
         res.json(err)
     })
 }

module.exports = chatController