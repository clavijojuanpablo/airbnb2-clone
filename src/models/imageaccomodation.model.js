const { DataTypes } = require('sequelize')
const { db } = require('../utils/database')
 const ImagesAccommodations = db.define('accommodation_image',{
    id:{
        primaryKey : true,
        type: DataTypes.UUID,
        allowNull: false

    },
    name:{
       type: DataTypes.STRING,
       allowNull: false
    },
    url:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isUrl: true
        }
    },
    accommodationImage:{
        type: DataTypes.UUID,
        allowNull: false,
        field: 'accommodation_id'
    }
 })

 module.exports = ImagesAccommodations