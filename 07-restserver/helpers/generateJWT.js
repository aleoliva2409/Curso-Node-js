const jwt = require("jsonwebtoken")

const generateJWT = (uid = "") => {
	return new Promise((resolve, reject) => {
		const payload = { uid }

		jwt.sign(payload, process.env.SECRET_PRIVATE_KEY, {
			expiresIn: "4h"
		}, (err, token) => {
			if(err) {
				console.log(err);
				reject("Don´t generate JWT")
			} else {
				resolve(token)
			}
		})
	})
}

module.exports = {
	generateJWT
}