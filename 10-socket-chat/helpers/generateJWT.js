const jwt = require("jsonwebtoken");
const { User } = require("../models");

const generateJWT = (uid = "") => {
	return new Promise((resolve, reject) => {
		const payload = { uid };

		jwt.sign(
			payload,
			process.env.SECRET_PRIVATE_KEY,
			{
				expiresIn: "4h",
			},
			(err, token) => {
				if (err) {
					console.log(err);
					reject("Don´t generate JWT");
				} else {
					resolve(token);
				}
			}
		);
	});
};

const checkJWT = async (token = "") => {
	try {
		if (token.length <= 10) return null;

		const { uid } = jwt.verify(token, process.env.SECRET_PRIVATE_KEY);

		const user = await User.findById(uid);

		if (user && user.status) return user;

		return null;
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	generateJWT,
	checkJWT,
};
