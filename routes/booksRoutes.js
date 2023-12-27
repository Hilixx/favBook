const express = require('express')
const Auth = require('../models/Auth')
const routes = express.Router()
const booksController = require('../controller/booksController')


routes.get('/register/:id',(req,res)=>{
    const userId = req.params.id
    
    
    
    res.render('registerBooks',{userId})
})

routes.post('/register', booksController.registerBook)

routes.get('/phrasesAdd/:id/:userId',(req,res)=>{
    const booksId = req.params.id
    const userId = req.params.userId
    res.render('addPhrase',{booksId, userId})
})
routes.post('/phrasesAdd',booksController.addPhrases)

routes.get('/userBooks/:id',booksController.userBooks)


routes.get('/phrases/:id/:userId', booksController.bookPhrases)
module.exports = routes