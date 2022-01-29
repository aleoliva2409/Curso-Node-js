// Referencies
const $ticket1 = document.getElementById("ticket1");
const $ticket2 = document.getElementById("ticket2");
const $ticket3 = document.getElementById("ticket3");
const $ticket4 = document.getElementById("ticket4");
const $desktop1 = document.getElementById("desktop1");
const $desktop2 = document.getElementById("desktop2");
const $desktop3 = document.getElementById("desktop3");
const $desktop4 = document.getElementById("desktop4");


const socket = io()

socket.on("status", payload => {

  const audio = new Audio("./audio/new-ticket.mp3")
  audio.play()

  const [ticket1, ticket2, ticket3, ticket4] = payload

  if(ticket1) {
    $ticket1.innerText = `Ticket ${ticket1.ticketNumber}`
    $desktop1.innerText = ticket1.desktop
  }
  if(ticket2) {
    $ticket2.innerText = `Ticket ${ticket2.ticketNumber}`
    $desktop2.innerText = ticket2.desktop
  }
  if(ticket3) {
    $ticket3.innerText = `Ticket ${ticket3.ticketNumber}`
    $desktop3.innerText = ticket3.desktop
  }
  if(ticket4) {
    $ticket4.innerText = `Ticket ${ticket4.ticketNumber}`
    $desktop4.innerText = ticket4.desktop
  }

})