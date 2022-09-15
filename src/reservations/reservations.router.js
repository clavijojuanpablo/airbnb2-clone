const router = require('express').Router()
const reservationServices = require('./reservations.http')

router.route('/')
    .get(reservationServices.getAll)
    .get(reservationServices.getById)


router.route('/:id')
    .put(reservationServices.editReservations)


module.exports = {
    router
}