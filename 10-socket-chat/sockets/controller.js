const { checkJWT } = require("../helpers/generateJWT");

const socketController = async (socket) => {
	const user = await checkJWT(socket.handshake.headers['x-token'])

	if(!user) return socket.disconnect()

	console.log(user.name, 'is connected');

};

module.exports = {
	socketController,
};
