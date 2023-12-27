const {DataTypes} = require('sequelize')
const db = require('../db/conn')
const Users = require('./Users')
const Auth = require('./Auth')

const Books = db.define('Books',{
    title:{
        type:DataTypes.STRING,
        require:true
    },
    writer:{
        type:DataTypes.STRING,
        require:true
    },
    feedback:{
        type:DataTypes.INTEGER,
    },
    userId:{
        type:DataTypes.STRING
    }
    
})



module.exports = Books