// Referencies
const $desktop = document.getElementsByTagName("h1")[0];
const $small = document.getElementsByTagName("small")[0];
const $btnAttend = document.getElementsByTagName("button")[0];
const $alert = document.getElementsByClassName("alert")[0];
const $pendingTickets = document.getElementById("pendingTickets")

const searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has("desktop")) {
  window.location = "index.html";
  throw new Error("Desktop is required");
}

const desktop = searchParams.get("desktop");
$desktop.innerText = desktop
$alert.style.display = "none"

const socket = io()

socket.on("connect", () => {
  $btnAttend.disabled = false
})

socket.on("disconnect", () => {
  $btnAttend.disabled = true
})


socket.on("pending-tickets", (pendingTickets) => {
  if(pendingTickets === 0 ) {
    $pendingTickets.style.display = "none"
  } else {
    $pendingTickets.style.display = ""
    $pendingTickets.innerText = pendingTickets
  }
})

$btnAttend.addEventListener("click", () => {

  socket.emit("attend-ticket", { desktop }, ({ ok, ticket }) => {

    if(ok) {
      $small.innerText = `ticket ${ticket.ticketNumber}`
    } else {
      $alert.style.display = ""
      $small.innerText = "nobody"
    }
  })
})
