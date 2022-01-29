// const {createFile} = require('./helpers/multiplication(fs.wfs)')
const { createTablePromise } = require('./helpers/multiplication-promise')
// const {createTableAsync} = require('./helpers/multiplication-async')
const argv = require('./config/yargs')
const colors = require("colors");


console.clear()

// const base = 4

// createFile(base)

createTablePromise(argv.b,argv.l,argv.h)
  .then(msg => console.log(msg.yellow, "creada con promises".blue))
  .catch(err => console.err(err))

// createTableAsync(base) // no necesario then ni catch con async



// * recibir informacion desde la linea de comandos(terminal)

// console.log(process.argv);

// const [ , , arg3="base=5"] = process.argv
// const [ ,base=5] = arg3.split('=')

// // console.log(arg3);
// // console.log(base);

// createFile(base)

// createTablePromise(base)
//   .then(msg => console.log(msg, "creada con promises"))
//   .catch(err => console.err(err))

// createTableAsync(base)


//* yargs

// console.log(process.argv);
// console.log(argv);
// console.log('base: yargs',argv.base);
