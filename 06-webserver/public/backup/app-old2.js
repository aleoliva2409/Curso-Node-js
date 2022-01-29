const express = require("express");
const app = express();

// ? servir contenido estatico

app.use(express.static('./public'))



app.get("/hola-mundo", (req, res) => {
  res.send("Hola Mundo");
});

app.get("*", (req, res) => {
  res.send("404 page not found");
});


app.listen(8080);
