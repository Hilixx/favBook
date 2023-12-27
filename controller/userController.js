const User = require('../models/Users')
const Auth = require('../models/Auth')
const bcryptjs = require('bcrypt')
const { use } = require('../routes/userRoutes')

module.exports = class userController{
    static  register(req,res){
        const email = req.body.email
        const password = req.body.password
        const name = req.body.name 
        const surname = req.body.surname
        const age = req.body.age
        const location = req.body.location 
        const salt = bcryptjs.genSaltSync(2)
        const hashedPassword = bcryptjs.hashSync(password, salt)
        console.log(hashedPassword)
        const user = {
            name,
            surname,
            age,
            location
        }
        const login = {
            email,
            password : hashedPassword
        }
        Auth.create(login)
        User.create(user)
        
        const auth = true
        res.render('login',{auth:true})
        
        
    }
    static async login(req,res){
        const email = req.body.email
        const pass = req.body.pass
        const user = await Auth.findOne({where:{email:email}})
        console.log(user)

        if(!user){
            console.log('senha ou email invalidos')
            res.redirect('/user/login')
        }else{
            const matchPassoword = bcryptjs.compareSync(pass, user.password)
            if(!matchPassoword){
                console.log('senha ou email invalidos')
                res.redirect('/user/login')
            }
            else{
                const userId = user.id
                res.render('home',{auth:true,userId})
            }
           
           
        }
        
        
    }
}