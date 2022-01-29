const Ticket = require("./Ticket")
const path = require("path")
const fs = require("fs")

class TicketControl {
  constructor() {
    this.last = 0;
    this.today = new Date().getDate();
    this.tickets = [];
    this.lastFourTickets = [];

    this.init()
  }


  get toJson() {
    return {
      last: this.last,
      today: this.today,
      tickets: this.tickets,
      lastFourTickets: this.lastFourTickets
    }
  }

  init() {
    const { today, last, lastFourTickets, tickets } = require("../db/data.json");

    if(today === this.today) {
      this.last = last;
      this.tickets = tickets;
      this.lastFourTickets = lastFourTickets;
    } else {
      this.saveDB()
    }
  }

  saveDB() {
    const dbPath = path.join(__dirname, "../db/data.json")
    fs.writeFileSync(dbPath, JSON.stringify(this.toJson))
  }

  next() {
    this.last += 1;
    const ticket = new Ticket(this.last, null);
    this.tickets.push(ticket)

    this.saveDB()
    
    return "Ticket " + ticket.ticketNumber
  }

  attendTicket(desktop) {
    if(this.tickets.length === 0) {
      return null
    }

    const ticket = this.tickets.shift()
    ticket.desktop = desktop

    this.lastFourTickets.unshift(ticket)

    if(this.lastFourTickets.length > 4) {
      this.lastFourTickets.splice(-1,1)
    }

    this.saveDB()

    return ticket
  }
}

module.exports = TicketControl