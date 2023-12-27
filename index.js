//Setup
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const conn = require('./db/conn')


app.engine('handlebars',exphbs.engine())
app.set('view engine','handlebars')
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))


app.use(express.static('public'))


//Routes
app.get('/',(req,res)=>{
    res.render('home')
})

const userRoutes = require('./routes/userRoutes')
const bookRoutes = require('./routes/booksRoutes')

app.use('/books',bookRoutes)
app.use('/user',userRoutes)




//Models
const Users = require('./models/Users')
const Auth = require('./models/Auth')
const Books = require('./models/Books')
const Phrases = require('./models/Phrases')




//Conection
conn.sync({
    //force:true
}).then(
    app.listen(3000,()=>{
        console.log('banco conectado')
        console.log('rodando na porta 3000')
        
    })
    
   
).catch((err)=>{
    console.log(err)
})