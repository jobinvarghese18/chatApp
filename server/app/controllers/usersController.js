const User = require('../models/users')
const usersController = {}
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const { find } = require('../models/users')

usersController.register = (req,res)=>{
    
    const body = req.body
    const user = new User(body)
    bcryptjs.genSalt()
    .then((salt)=>{
        bcryptjs.hash(user.password,salt)
        .then((encrypted)=>{
            user.password = encrypted
            user.save()
            .then((user)=>{
                res.json(user)
            })
            .catch((err)=>{
                res.json(err)
            })
        })
    })
    .catch((err)=>{
        console.log(err)
    })
}

usersController.login = (req,res)=>{
    const body = req.body
    User.findOne({email:body.email})
    .then((user)=>{
        if(!user){
            res.json({
                errors:"Invalid e-mail or password"
            })
        }
        bcryptjs.compare(body.password,user.password)
        .then((match)=>{
            if(match){
                const tokenData  = {
                    _id:user.id,
                    email:user.email,
                    username:user.username
                }
                const token = jwt.sign(tokenData,'jo123',{
                    expiresIn:'2d'
                })
                res.json({
                    token:`Bearer ${token}`
                })
            }
            else{
                res.json({
                    errors:"Invalid e-mail or password"
                })
            }
        })
    })
}

usersController.list = (req,res)=>{
    User.find()
    .then((users)=>{
        res.json(users)
    })
    .catch((err)=>{
        res.json(err)
    })
}

usersController.account = (req,res)=>{
    res.json(req.user)
}

module.exports = usersController