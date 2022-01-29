const colors = require("colors");
const fs = require("fs");

const createTablePromise = (base, listar = false,hasta = 10) => {
  return new Promise((resolve, reject) => {
    if (listar === true) {
      console.log(colors.brightBlue("============="));
      console.log(colors.bold.brightYellow(`Tabla del: ${base}`));
      console.log(colors.brightBlue("============="));
    }

    let salida = "";
    let consola = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${"x".yellow} ${i} ${"=".yellow} ${base * i}\n`; // * asignar color
    }

    if (listar === true) {
      console.log(`${colors.brightBlue(consola)}`);
    }

    fs.writeFileSync(`./tablas/tabla-${base}.txt`, salida);

    resolve(`tabla-${base}.txt`);

    if (!consola) reject("coloca un numero valido");
  });
};

module.exports = {
  createTablePromise: createTablePromise,
};
