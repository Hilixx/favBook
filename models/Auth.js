const {DataTypes} = require('sequelize')
const db = require('../db/conn')
const User = require('./Users')
const Books = require('./Books')


const Auth = db.define('Auth',{
    email:{
        type:DataTypes.STRING,
        require:true
    },
    password:{
        type:DataTypes.STRING,
        require:true
    }
})



module.exports = Auth