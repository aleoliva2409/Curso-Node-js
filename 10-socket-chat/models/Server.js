const express = require("express");
const morgan = require('morgan')
const cors = require("cors");
const fileUpload = require("express-fileupload")
const { createServer } = require('http')

const { dbConnection } = require("../database/config.db");
const { socketController } = require("../sockets/controller");


class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT;
		this.server = createServer(this.app)
		this.io = require('socket.io')(this.server)

		this.routesPath = {
			auth: "/api/auth",
			categories: "/api/categories",
			products: "/api/products",
			search: "/api/search",
			users: "/api/users",
			uploads: "/api/uploads"
		}

		//* Conexion con la DB
		this.connectDB();
		//* Midlewares
		this.middlewares();
		//* Rutas de la App
		this.routes();
		//* Sockets
		this.sockets()
	}

	async connectDB() {
		await dbConnection();
	}

	middlewares() {
		this.app.use(cors());
		//* lectura y parseo del body
		this.app.use(express.json());
		this.app.use(express.static("public"));
		this.app.use(morgan('dev'))
		this.app.use(fileUpload({
			useTempFiles : true,
			tempFileDir : '/tmp/',
			createParentPath: true
	}));
	}

	routes() {
		this.app.use(this.routesPath.auth, require("../routes/auth.routes"));
		this.app.use(this.routesPath.categories, require("../routes/categories.routes"));
		this.app.use(this.routesPath.products, require("../routes/products.routes"))
		this.app.use(this.routesPath.search, require("../routes/search.routes"))
		this.app.use(this.routesPath.users, require("../routes/users.routes"));
		this.app.use(this.routesPath.uploads, require("../routes/uploads.routes"))
	}

	sockets() {
		this.io.on('connection', socketController)
	}

	listen() {
		this.server.listen(this.port, () => {
			console.log("listening on port", this.port);
		});
	}
}

module.exports = Server;
