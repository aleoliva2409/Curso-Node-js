class Message {
	constructor(uid, name, message) {
		this.uid = uid;
		this.name = name;
		this.message = message;
	}
}

class Chat {
	constructor() {
		this.messages = [];
		this.privateMessages = [];
		this.users = {};
	}

	get lastMessages() {
		this.messages = this.messages.splice(0, 10);
		return this.messages;
	}

	get lastPrivateMessages() {
		this.privateMessages = this.privateMessages.splice(0, 10);
		return this.privateMessages;
	}

	get listUsers() {
		return Object.values(this.users);
	}

	sendMessages(uid, name, message) {
		this.messages.unshift(new Message(uid, name, message));
	}

	sendPrivateMessages(uid, name, message) {
		this.privateMessages.unshift(new Message(uid, name, message));
	}

	connectUser(user) {
		this.users[user.id] = user;
	}

	disconnectUser(id) {
		delete this.users[id];
	}
}

module.exports = Chat;
