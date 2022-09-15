const { DataTypes } = require('sequelize')

const { db } = require('../utils/database')

const Accommodations = db.define('accommodations', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
    },
    placeId:{
        type: DataTypes.UUID,
        allowNull: false,
        field: 'place_id'
    },
    title:{
        allowNull: false,
        type: DataTypes.STRING,
        
    },
    description:{
        allowNull: false,
        type: DataTypes.STRING,
       
    },
    guests:{
        type: DataTypes.INTEGER,
        allowNull: false,
        
    },
    rooms: {
        allowNull: false,
        type: DataTypes.INTEGER,

    },
    beds:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    bathrooms:{
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    price: {
        allowNull: false,
        type: DataTypes.FLOAT
    },
    userId:{
      allowNull: false,
      type: DataTypes.UUID,
      field: 'user_id'
    },
    score: {
        allowNull: false,
        type: DataTypes.FLOAT,
        
    },
    commission:{
        allowNull: false,
    type: DataTypes.FLOAT
        
    },
    isActive:{
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    field: 'is_active'
    }

})




module.exports = Accommodations 

