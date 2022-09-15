const uuid = require("uuid");
const { hashPassword } = require("../utils/crypt");
const  User = require ("../models/user.model")



const userDB = [{
  "id": "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
  "firstName": "Sahid",
  "lastName": "Kick",
  "email": "sahid.kick@academlo.com",
  "password": "$2b$10$TNGcRFonQH98rVqFaBVfpOEEv2Xcu5ej14tWqKim3z3L6Tr.ZIaqC",
  "phone": "1234567890",
  "birthdayDate": "22/10/2000",
  "rol": "admin",
  "profileImage": "",
  "country": "mexico",
  "isActive": true,
  "verified": false
}];

const getAllUsers = async () => {

  const data = await User.findAll({
    attributes: {
      exclude: ['password']
    }
  })
  return data;
  //? select * from users;
};

const getUserById = async(id) => {
  
  const data = await User.findOne({
    where: {
      id
    },
    attributes: {
      exclude: ['password']
    }
  })
  return data
  //? select * from users where id = ${id};
};

const createUser = async (data) => {
  const newUser =  await User.create({
    id: uuid.v4(), 
    firstName: data.firstName, 
    lastName: data.lastName, 
    email: data.email, 
    gender: data.gender,
    password: hashPassword(data.password), 
    phone: data.phone, 
    birthdayDate: data.birthdayDate,
    roleId: data.roleId,
    address: data.address,
    profileImage: data.profileImage,
    dni: data.dni,
    status: data.status,
    verified: false,
  })
  
 
  return newUser

};

const editUser = async (userId, data, userRol) => {
  const { id, password, verified, roleId, ...restOfProperties } = data;
  if ('9210664c-86ee-498f-b478-e1082700b6fc' === userRol) {
    const response = await User.update(
      { ...restOfProperties, roleId },
      { where: { id: userId } }
    );
    return response
  } else {
    const response = await User.update(restOfProperties, { where: { id: userId } });
    return response
  }
}

const getUserByEmail = (email) => {
  const data = userDB.filter((item) => item.email === email);
  return data.length ? data[0] : false
  //? select * from users where email = ${email};
}

const editProfileImg = (userID, imgUrl) => {
  const index = userDB.findIndex(user => user.id === userID)
  if(index !== -1){
    userDB[index].profileImage = imgUrl
    return userDB[index]
  }
  return false
}

const deleteUser = async (id) => {
  const data = await User.destroy({
    where: {
      id: id,
    },
  });
  return data;
};

const getUserWithRole = async (userId) => {
  const data = await Users.findOne({
    where: {
      id: userId,
    },
    include: {
      model: Roles,
      as: "role",
      attributes: {
        exclude: ["id", "createdAt", "updatedAt"],
      },
    },
    attributes: {
      exclude: ["roleId", "createdAt", "updatedAt", "password"],
    },
  });
  return data;
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  editUser,
  deleteUser,
  getUserByEmail,
  editProfileImg,
  getUserWithRole
}