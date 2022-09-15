const router = require('express').Router()
const placesServices = require('./places.http')
const passport = require('passport')
require('../middleware/auth.middleware')(passport)

router.route('/') //* /api/places
    .get(placesServices.getAll)
    
    

router.route('/me') //* /api/places
    .post(passport.authenticate('jwt', {session: false}), placesServices.createPlace)

router.route("/:id")
    .get(placesServices.getById)
    .put(placesServices.edit)
    .delete(placesServices.removePlace)



    exports.router = router