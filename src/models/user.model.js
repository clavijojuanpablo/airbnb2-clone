const { DataTypes } = require('sequelize')

const { db } = require('../utils/database')

const Users = db.define('users', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
    },
    firstName: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'first_name'
    },
    lastName: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'last_name'
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING(30),
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    phone: {
        allowNull: false,
        type: DataTypes.STRING,

    },
    gender:{
      type: DataTypes.STRING,
      allowNull: false,
    },

    dni:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    birthdayDate: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'birthday_date'
    },
    roleId: {
        allowNull: false,
        type: DataTypes.UUID,
        field: "role_id"
        
    },
    address:{
        type: DataTypes.STRING,
        
    },
    profileImage: {
        type: DataTypes.STRING,
        // validate: {
        //     isUrl: true
        // },
        field: 'profile_image'
    },
    // country: {
    //     allowNull: false,
    //     type: DataTypes.STRING,
    // },
    status: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 'active' //active, non-active, deleted, suspended
    },
    verified: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
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




module.exports = Users 