const express = require('express')
const port = 3035
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

app.use(cors())

const configureDB  = require('./config/configureDB')

configureDB()


app.use(express.json())


const routes = require('./config/routes')
app.use('/',routes)

app.listen(port,()=>{
    console.log('connected to  port',port)
})