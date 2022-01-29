const express = require("express");
const hbs = require("hbs");
require("dotenv").config()
const app = express();
const port = process.env.PORT

// ? handlrerbars
hbs.registerPartials(__dirname + "/views/partials", function (err) {
  console.log(err)
});
app.set("view engine", "hbs");


// ? servir contenido estatico

app.use(express.static("./public"));

app.get('/', (req, res) => {
  res.render('home' , {
    nombre: 'Alejandro Oliva',
    titulo: 'Curso de Node JS',
    h1: 'Hecho con Node JS'
  })
})

//* con handlerbars
app.get('/generic' , (req, res) => {
  res.render('generic') // * usamos render para renderizar los archivos '.hbs' una especie de '.jsx'
})

app.get('/elements' , (req, res) => {
  res.render('elements')
})

//* sin handlerbars 
// ? aca directamente leemos el archivo enviado
// app.get("/generic" , (req, res) => {
//   res.sendFile(__dirname + '/public/generic.html');
// })


// app.get("/elements" , (req, res) => {
//   res.sendFile(__dirname + '/public/elements.html');
// })

app.get("*", (req, res) => {
  res.send("404 page not found");
});

app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
