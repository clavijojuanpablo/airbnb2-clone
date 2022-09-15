const Users = require('../models/user.model')
const Roles = require('../models/roles.model')
const imagesUsers = require('../models/image.model')
const Reservations = require('../models/reservation.model')
const Accommodations = require('../models/accommodation.model')
const Places = require('../models/place.model')
const ImagesAccommodations = require('../models/imageaccomodation.model')


 const generateData = async() => {
    await Roles.bulkCreate([{name:"guest", id: "044b749f-09db-4234-b176-552d179af86d"}, {name:"host", id: "ff33a29e-6225-40d9-bfdb-7dc1124dab78"}, {name:"admin", id: "9210664c-86ee-498f-b478-e1082700b6fc"}], {validate : true})
    await Users.create({
      id: "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
      firstName: "Sahid",
      lastName: "Kick",
      gender: "male",
      email: "sahid.kick@academlo.com",
      password: "$2b$10$TNGcRFonQH98rVqFaBVfpOEEv2Xcu5ej14tWqKim3z3L6Tr.ZIaqC",
      phone: "1234567890",
      birthdayDate: "2022/09/10",
      dni: "2344354",
      address: "car/20",
      roleId: "9210664c-86ee-498f-b478-e1082700b6fc",
      profileImage: "",
      status: "active",
      verified: false
    })  

    await Places.bulkCreate([
      {
        id: '864ee3c2-facd-4a23-8b4a-4e9d342d9036',
        city: 'Guadalajara',
        state: 'Jalisco',
        country: 'México',
        continent: 'America'
      },
      {
        id: '9c0412b6-7d56-4347-8fbe-5455e8a42438',
        city: 'Zapopan',
        state: 'Jalisco',
        country: 'México',
        continent: 'America'
      },
      {
        id: '3436a556-6623-40ba-88b8-2e01009f9d82',
        city: 'Suba',
        state: 'Bogotá',
        country: 'Colombia',
        continent: 'America'
      },
      {
        id: '134a55b6-487c-46cc-a5b5-9392af20c205',
        city: 'Medellín',
        state: 'Antioquia',
        country: 'Colombia',
        continent: 'America'
      },
      {
        id: '3a230417-80ae-4232-a8ff-6fd50068a777',
        city: 'Azcapotzalco',
        state: 'CDMX',
        country: 'México',
        continent: 'America'
      },
      {
        id: '0d907427-7623-4ec9-8c6d-270bb92fbbe7',
        city: 'Monterrey',
        state: 'Muevo León',
        country: 'México',
        continent: 'America'
      },
    ])

    // await Accommodations.create({
    //   id: "7e5fc196-8f45-46d2-bb2b-2f8b95340d50",
    //   title: "premium - vistas 360 ciudad (alberca y gym)",
    //   description: "Acerca del espacio. Este impresionante departamento te dejará sid y elegancia!",
    //   guests: 6,
    //   rooms: 3,
    //   beds: 3,
    //   bathrooms: 4.5,
    //   price: 1536.00,
    //   hostId : '74cd6011-7e76-4d6d-b25b-1d6e4182ec2f',
    //   score: 0.00,
      
    //   placesId: '9c0412b6-7d56-4347-8fbe-5455e8a42438',
   
    //   commission: 150.0
    // })
  }
  


module.exports = generateData