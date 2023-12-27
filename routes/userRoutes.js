const express = require('express')
const userController = require('../controller/userController')
const routes = express.Router()

routes.get('/register',(req,res)=>{
    res.render('register')
})
routes.get('/login',(req,res)=>{
    res.render('login')
})
routes.post('/register', userController.register)
routes.post('/login', userController.login)



module.exports = routes