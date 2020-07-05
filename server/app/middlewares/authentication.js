const jwt = require('jsonwebtoken')
const User = require('../models/users')

const authenticateUser = (req,res,next)=>{
const token = req.header('Authorization').split(' ')[1]
let tokenData 
      try{
          tokenData = jwt.verify(token,'jo123')
          User.findById(tokenData._id)
          .then((user)=>{
              req.user = user
              next()
          })
      }
      catch(e){
          res.json(e.message)
      }
}

module.exports = {
    authenticateUser
}