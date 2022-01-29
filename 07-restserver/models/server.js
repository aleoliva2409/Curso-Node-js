const express = require('express')
const cors = require('cors')

class Server{
  constructor(){
    this.app = express();
    this.port = process.env.PORT;
    this.usersRoutePath = '/api/users';

    this.middlewares()
    this.routes();
  }

  middlewares() {

    this.app.use(cors())
    //* lectura y parseo del body
    this.app.use(express.json())
    
    this.app.use(express.static('public'))
  }

  routes() {
    this.app.use(this.usersRoutePath, require("../routes/users.routes"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("listening on port", this.port);
    });
  }
}

module.exports = Server