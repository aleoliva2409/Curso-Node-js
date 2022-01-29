const {response} = require('express')

//* podemos NO usar esta importacion

const usersGet = (req, res = response) => {
  // const params = req.query

  const {name = 'no name',apikey,age} = req.query
  
  res.json({
    msg: "get API - Controller",
    name,
    apikey,
    age
  });
};

//* aca no usamos el response importado

const usersPost = (req, res) => {
  //! NO RECOMENDADO
  const body = req.body 
  
  //* RECOMENDADO
  //* con destructuring
  // const {name,age} = req.body

  res.json({
    msg: "post API - Controller",
    ...body
  });
}

const usersPut = (req, res) => {

  const id = req.params.id

  res.json({
    msg: "put API - Controller",
    id
  });
};

const usersDelete = (req, res) => {
  res.json({
    msg: "delete API - Controller"
  })
}

module.exports = {
  usersGet,
  usersPost,
  usersPut,
  usersDelete
}