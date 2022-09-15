const Accommodations = require("../models/accommodation.model");
const Places = require("../models/place.model");
const Users = require("../models/user.model");

const getAllAccommodations = async () => {
  const data = await Accommodations.findAll({
    include: [
        {
            model: Places,
            
        },
        {
          model: Users,
          as: 'user'
        },
    ],
   
  });

 
  return data;
};

const getAccommodationById = async (id) => {
  const data = await Accommodations.findOne({
    where: {
      id,
    },
    include:[ {
      model: Places,
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    },{
      model: Users,
      as: 'user',
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    }
  ],
    attributes: {
      exclude: ["createdAt", "updatedAt", "userId", "placeId", "hostId"],
    },
  });
  return data;
};

module.exports = {
  getAllAccommodations,
  getAccommodationById,
};