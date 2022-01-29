const socketController = client => {
  console.log("client connect", client.id)

  client.on("send-message", (payload, callback) => {

    const resFromBackend = "response from backend using callback(3rd arg)"
    callback(resFromBackend)
    client.broadcast.emit("redirect-message", payload)
  })

  client.on("disconnect", () => {
    console.log("client disconnect", client.id)
  })
}

module.exports = {
  socketController
}