const router = require('express').Router()

const authServices = require('./auth.http')
const usersServices = require('../users/users.http')

router.post('/login', authServices.login)
router.post('/register', usersServices.register)

exports.router = router    