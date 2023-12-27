const {DataTypes} = require('sequelize')
const db = require('../db/conn')


const Phrases = db.define('Phrases',{
    title:{
        type:DataTypes.STRING,
        require:true
    },
    phrase:{
        type:DataTypes.TEXT,
        require:true
    },
    booksId:{
         type:DataTypes.STRING,
         require:true
    }
    
})


module.exports = Phrases