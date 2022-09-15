const Users = require('./user.model')
const Roles = require('./roles.model')
const Images = require('./image.model')
const Reservations = require('./reservation.model')
const Accommodations = require('./accommodation.model')
const Places = require('./place.model')
const ImagesAccommodations = require('./imageaccomodation.model')



const initModels = () => {
    //? Users -> Posts
    Users.belongsTo(Roles)
    Roles.hasMany(Users);


    //? Users <-> Accommodatons
    // Users.belongsToMany(Accommodations, {through: Reservations})
    // Accommodations.belongsToMany(Users, {through: Reservations})

Users.hasMany(Reservations)
  Reservations.belongsTo(Users)

  Accommodations.hasMany(Reservations)
  Reservations.belongsTo(Accommodations)

    //? Users -> users_images
    Users.hasMany(Images)
    Images.belongsTo(Users)

    //? Places -> Accommodations
    Accommodations.belongsTo(Places);
    Places.hasMany(Accommodations);
   
    //? Accommodations -> Accommodations_images
   Accommodations.hasMany(ImagesAccommodations)
   ImagesAccommodations.belongsTo(Accommodations)

   //? users -> Accommodations (host)
   Users.hasMany(Accommodations)
   Accommodations.belongsTo(Users)

}

module.exports = initModels
