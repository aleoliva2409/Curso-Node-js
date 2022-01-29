const TicketControl = require("../models/TicketControl")

const ticketControl = new TicketControl()

const socketController = client => {

  client.emit("last-ticket", ticketControl.last)
  client.emit("status", ticketControl.lastFourTickets)
  client.emit("pending-tickets", ticketControl.tickets.length)

  client.on("next-ticket", (payload, callback) => {
    const next = ticketControl.next();
    callback(next)
    client.broadcast.emit("pending-tickets", ticketControl.tickets.length)
    client.broadcast.emit("last-ticket", ticketControl.last)
  })

  client.on("attend-ticket", ({ desktop }, callback) => {
    if(!desktop) {
      return callback({
        ok: false,
        msg: "Desktop is required"
      })
    }

    desktop = desktop[0].toUpperCase() + desktop.substring(1)
    const ticket = ticketControl.attendTicket(desktop)
    client.broadcast.emit("status", ticketControl.lastFourTickets)
    client.emit("pending-tickets", ticketControl.tickets.length)
    client.broadcast.emit("pending-tickets", ticketControl.tickets.length)

    if(!ticket) {
      callback({
        ok: false,
        msg: "There are not pending tickets"
      })
    } else {
      callback({
        ok: true,
        ticket
      })
    }
  })
}

module.exports = {
  socketController
}