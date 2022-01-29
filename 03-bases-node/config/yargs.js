const argv = require("yargs")
  .option("b", {
    // ! ==>> comandos agregados a la consola
    alias: "base",
    type: "number",
    demandOption: true,
    describe:'escoge la tabla que quieres crear'
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base debe ser un numero";
    }
    return true;
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: 'muestra o no la tabla creada'
  })
  .option("h",{
    alias: "hasta",
    type: 'number',
    describe: 'Hasta que numero se hara la tabla creada'
  })
  .check((argv, options) => {
    if(isNaN(argv.h)) {
      throw "el limite debe ser un numero"
    }
    return true
  })
  .argv;

module.exports = argv;
