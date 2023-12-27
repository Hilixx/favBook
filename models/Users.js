const {DataTypes} = require('sequelize')
const db = require('../db/conn')


const Users = db.define('Users',{
    name:{
        type:DataTypes.STRING,
        require:true
    },
    surname:{
        type:DataTypes.STRING,
        require:true
    },
    location:{
        type:DataTypes.STRING,
        require:true
    },
    age:{
        type:DataTypes.INTEGER,
        require:true
    }
})

module.exports = Users