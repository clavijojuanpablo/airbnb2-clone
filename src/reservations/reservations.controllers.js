const uuid = require('uuid');
const Reservation = require('../models/reservation.model');
const Users = require('../models/user.model')
const Accommodations = require('../models/accommodation.model')

const getAllReservations = async() => {
    const data = await Reservation.findAll({
        include: [
            {
                model: Users
            },
            {
                model: Accommodations
            }
        ]
    })
    return data
}

const createReservation = async(data, userId, accommodationId) => {
    const {isFinished, isCanceled, ...restOfData} = data
    const newReservation = await Reservation.create({
        ...restOfData,
        id: uuid.v4(),
        userId: userId,
        accommodationId: accommodationId,
    })
    return newReservation
}

const getReservationById = async(id) => {
  
    const data = await Reservation.findOne({
      where: {
        id
      },
   
    })
    return data
    //? select * from users where id = ${id};
  };

  const deleteReservation = async (id) => {
    const data = await Reservation.destroy({
      where: {
        id: id,
      },
    });
    return data;
  };


  const updateReservation = async (data, reservationId) =>{
   const {id, ...restOfData} = data
    const response = await Reservation.update(restOfData, {
        where:{
            id:reservationId
        }
    })
    return response
  }

module.exports = {
    createReservation,
    getAllReservations,
    getReservationById,
    deleteReservation,
    updateReservation
}