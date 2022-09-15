const placesControllers = require("./places.controllers");

const getAll = (req, res) => {
    placesControllers
      .getAllPlaces()
      .then((response) => {
        res.status(200).json({ items: response.length, users: response });
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  };

const getById = (req, res) => {
    const id = req.params.id;
    placesControllers
       .getPlacesById(id)
      .then((response) => {
        res.status(200).json(response);
      })
      .catch((err) => {
        res.status(404).json({ message: `El usuario con el id ${id} no existe` });
      });
  };


  const createPlace = (req, res) => {
    const data = req.body;
    console.log(data)
    if (
      !data.city ||
      !data.state ||
      !data.continent||
      !data.country
     
    ) {
      return res.status(400).json({
        message: "All fields must be completed",
        fields: {
          city: "string",
          state: "string",
          continent: "string",
          country: "string"
        },
      });
    } else {
      placesControllers.createPlace(data,req.user.roleId)
        .then((response) => {
          res.status(201).json({
            message: `place created succesfully with id: ${response.id}`,
            place: response,
          });
        })
        .catch(err => {
          res.status(400).json({message: err.errors[0].message})
        }) 
    }
  };

  const edit = (req, res) => {
    const placeId = req.params.id;
    const data = req.body;
    if (!Object.keys(data).length) {
      return res.status(400).json({ message: "Missing Data" });
    } else if (
      !data.city ||
      !data.state ||
      !data.continent ||
      !data.country
    ) {
      return res.status(400).json({
        message: "All fields must be completed",
        fields: {
          city: "string",
          state: "string",
          country: "string",
          continnet: "string"
        },
      });
    } else {
      
      const response = placesControllers.editPlace(placeId, data, req.user.roleId  )
      .then((response) => {
        res.status(200).json({
          message: 'Place edited succesfully',
          place: response
        })
      })
      .catch(err => {
        res.status(400).json({message: err.errors[0].message})
      }) 
        
    }
  };

  const removePlace = (req, res) => {
    const id = req.params.id;
    placesControllers.deletePlace(id)
      .then((response) => {
        if(response){
          res.status(204).json()
        }else{
          res.status(400).json({
            message: 'Invalid ID'
          })
        }
      })
  };
  


  module.exports = {
    getAll,
    getById,
    createPlace,
    edit,
    removePlace
    }