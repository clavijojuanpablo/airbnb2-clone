const { DataTypes } = require('sequelize')
const { db } = require('../utils/database')
 const Places = db.define('place',{
    id:{
        primaryKey : true,
        type: DataTypes.UUID,
        allowNull: false

    },
    country:{
    type: DataTypes.STRING,
    allowNull: false
    },
    continent:{
        type: DataTypes.STRING,
        allowNull: false
    },
    city:{
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    state:{
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    createdAt:{
        type: DataTypes.DATE,
        allowNull: false,
        field: 'created_ad'
    },
    updatedAt:{
        type: DataTypes.DATE,
        allowNull: false,
        field: 'update_ad'

    }
 })

 module.exports = Places