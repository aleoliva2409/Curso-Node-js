let user = null;
let socket = null;
let $uid;
let $userName;
let $paragraph;

const $inputUid = document.getElementById("txtUid");
const $inputMessage = document.getElementById("txtMessage");
const $users = document.getElementById("ulUsers");
const $messages = document.getElementById("ulMessages");
const $privateMessages = document.getElementById("ulPrivateMessages");
const $btnLogout = document.getElementById("btnLogout");

const url = window.location.hostname.includes("localhost")
	? "http://localhost:8080/api/auth"
	: "https://api-coffe-nodejs.herokuapp.com/api/auth";

const validateJWT = async () => {
	const token = localStorage.getItem("token") || "";

	if (token.length <= 10) {
		window.location = "index.html";
		throw new Error("token doesn't exist ");
	}

	const resp = await fetch(url, {
		headers: { "x-token": token },
	});

	const { user: userDB, token: tokenDB } = await resp.json();

	localStorage.setItem("token", tokenDB);
	user = userDB;
	document.title = user.name;

	await connectSocket();
};

const connectSocket = async () => {
	socket = io({
		extraHeaders: {
			"x-token": localStorage.getItem("token"),
		},
	});

	socket.on("connect", () => {
		console.log("Socket online");
	});

	socket.on("disconnect", () => {
		console.log("Socket offline");
	});

	socket.on("receive-messages", showMessages);
	socket.on("active-users", showUsers);
	socket.on("receive-messages-private", showPrivateMessages);
};

const showUsers = (users = []) => {
	let usersTemplate = "";

	users.forEach(({ name, uid }) => {
		usersTemplate += `
			<li>
				<p id="paragraph" >
					<h5 id="username" class="text-success" >${name}</h5>
					<span id="uid" class="fs-6 text-muted" >${uid}</span>
				</p>
			</li>
		`;

		$users.innerHTML = usersTemplate;
	});
};



const showMessages = (messages = []) => {
	let msgTemplate = "";

	messages.forEach(({ name, message }) => {
		msgTemplate += `
			<li>
				<p>
					<span class="text-primary" >${name}: </span>
					<span>${message}</span>
				</p>
			</li>
		`;

		$messages.innerHTML = msgTemplate;
	});
};

const showPrivateMessages = (privateMessages = []) => {
	let msgTemplate = "";

	privateMessages.forEach(({ name, message }) => {
		msgTemplate += `
			<li>
				<p>
					<span class="text-primary" >${name}: </span>
					<span>${message}</span>
				</p>
			</li>
		`;

		$privateMessages.innerHTML = msgTemplate;
	});
}

$inputMessage.addEventListener("keyup", ({ key }) => {
	const message = $inputMessage.value;
	const uid = $inputUid.value;

	if (key !== 'Enter') return;
	if (message.length === 0) return;

	socket.emit("send-message", { uid, message });

	$inputMessage.value = ''
});

const main = async () => {
	await validateJWT();
};

main();

// const socket = io()
