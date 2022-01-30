const { checkJWT } = require("../helpers/generateJWT");
const { Chat } = require("../models");

const chat = new Chat();

const socketController = async (socket, io) => {
	const user = await checkJWT(socket.handshake.headers["x-token"]);

	if (!user) return socket.disconnect();

	// ? To connect user and add
	chat.connectUser(user);
	io.emit("active-users", chat.listUsers);
	socket.emit("receive-messages", chat.lastMessages);

	// ? To connect a chat room
	socket.join(user.id) // ? salas: global, socket.id, user.id


	// ? Clean when somebody to disconnect
	io.on("disconnect", () => {
		chat.disconnectUser(user.id);
		io.emit("active-users", chat.listUsers);
	});

	socket.on("send-message", ({ uid, message }) => {

		if(uid) {
			// ? private message
			chat.sendPrivateMessages(user.id, user.name, message)
			socket.to(uid).emit('receive-messages-private', chat.lastPrivateMessages)
		} else {
			chat.sendMessages(user.id, user.name, message);
			io.emit("receive-messages", chat.lastMessages);
		}

	});
};

module.exports = {
	socketController,
};
