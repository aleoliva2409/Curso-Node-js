// Referencies

const $newTicket = document.getElementById("newTicket")
const $btnCreate = document.getElementsByTagName("button")[0]

// socket
const socket = io()

socket.on("connect", () => {
  $btnCreate.disabled = false
})

socket.on("disconnect", () => {
  $btnCreate.disabled = true
})

socket.on("last-ticket", ticket => {
  $newTicket.innerText = `Ticket ${ticket}`
})

$btnCreate.addEventListener("click", () => {
  socket.emit("next-ticket", null, ticket => {
    $newTicket.innerText = ticket
  })
})