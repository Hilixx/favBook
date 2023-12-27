const Books = require('../models/Books')
const Phrases = require('../models/Phrases')
const userController = require('../controller/userController')


module.exports = class booksController {

    static registerBook(req,res){
        const title = req.body.bookName 
        const writer = req.body.writer
        const feedback = req.body.feedback
        const userId = req.body.userId
        console.log(userId)

        const book = {
            
            title,
            writer,
            feedback,
            userId,
            
        }
        Books.create(book)
        res.render('home',{auth:true, userId})
    
    }
    static async userBooks(req,res){
        const userId = req.params.id
        console.log(userId)
        const userBooks = await Books.findAll({where:{userId:userId}, raw:true})
        console.log(userBooks)
        if(!userBooks){
            res.render('home',{auth:true, userId})
        }
        else{
            
            res.render('userBooks',{userBooks, auth:true, userId})
            
        }

    }
    static addPhrases(req,res){
        const title = req.body.title
        const phrase = req.body.phrase
        const booksId = req.body.booksId
        const userId = req.body.userId
        const resenha = {
            title,
            phrase,
            booksId
        }
        Phrases.create(resenha)
        res.render('home',{auth:true,userId})
        
        
        
    }
    static async bookPhrases(req,res){
        const booksId = req.params.id
        const userId = req.params.userId
        const title = req.params.title
        const phrase =  await Phrases.findAll({where:{booksId:booksId}, raw:true})
        console.log(phrase)
        if(!phrase){
            res.render('home',{userId, auth:true})
        }
        else{
            res.render('booksPhrases',{phrase, booksId})
        }
    }
}