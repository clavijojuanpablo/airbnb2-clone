const  Place = require ("../models/place.model")
const uuid = require("uuid");

const getAllPlaces = async () => {

    const data = await Place.findAll({
      
    })
    return data;
    //? select * from users;
  };

  
const getPlacesById = async(id) => {
  
  const data = await Place.findOne({
    where: {
      id
    },
 
  })
  return data
  //? select * from users where id = ${id};
};

const createPlace = async (data, user_rol) => {
  if ("ff33a29e-6225-40d9-bfdb-7dc1124dab78"===user_rol){
  const newPlace =  await Place.create({
    id: uuid.v4(), 
    city: data.city,
    state: data.state,
    country: data.country,
    continent: data.continent
  })
  
 
  return newPlace
}else{
  const error ={
    message: 'Invalid actions'
  }
}

};

const editPlace = async (placeId, data, userRol) => {
  console.log(placeId, data, userRol);
  const { id, ...restOfProperties } = data;
  if ('9210664c-86ee-498f-b478-e1082700b6fc' === userRol) {
    const response = await Place.update(
      
      { ...restOfProperties},
      { where: { id: placeId } }
    );
    console.log(response)
    return response
  } else {
    const response = await Place.update(restOfProperties, { where: { id: placeId } });
    return response
  }
  
}

const deletePlace = async (id) => {
  const data = await Place.destroy({
    where: {
      id: id,
    },
  });
  return data;
};







  module.exports ={
    getAllPlaces,
    getPlacesById,
    createPlace,
    editPlace,
    deletePlace
    
  }