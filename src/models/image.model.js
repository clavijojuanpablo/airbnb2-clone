const { DataTypes } = require('sequelize')
const { db } = require('../utils/database')
 const Images = db.define('images',{
    id:{
        primaryKey : true,
        type: DataTypes.UUID,
        allowNull: false

    },
    url:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isUrl: false
        }
    },
    userId:{
        type: DataTypes.UUID,
        allowNull: false,
        field: 'user_id'
    }
 })

 module.exports = Images

