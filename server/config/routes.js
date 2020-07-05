const express = require('express')
const router = express.Router()
const {authenticateUser} = require('../app/middlewares/authentication')
const usersController = require('../app/controllers/usersController')
const chatController = require('../app/controllers/chatController')

router.post('/user/register',usersController.register)
router.post('/user/login',usersController.login)
router.get('/user/listusers',authenticateUser,usersController.list)


router.get('/user/account',authenticateUser,usersController.account)
router.post('/user/chat',authenticateUser,chatController.create)
router.get('/user/chat/:id',authenticateUser,chatController.list)



module.exports = router