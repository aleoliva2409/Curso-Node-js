// HTML tags

const $online = document.getElementById("online");
const $offline = document.getElementById("offline");
const $input = document.getElementById("txtMessage");
const $button = document.getElementById("button");

const socket = io();

socket.on("connect", () => {
  console.log("Connect")
  $offline.style.display = "none"
  $online.style.display = ""
})

socket.on("disconnect", () => {
  console.log("Desconnect")
  $online.style.display = "none"
  $offline.style.display = ""
})

socket.on("redirect-message", payload => {
  console.log(payload)
})

$button.addEventListener("click", () => {
  const payload = {
    message: $input.value,
    date: new Date().getTime(),
    id: "41564AASDF"
  }
  $input.value = ""

  socket.emit("send-message", payload, (resFromBackend) => {
    console.log(resFromBackend)
  })
})