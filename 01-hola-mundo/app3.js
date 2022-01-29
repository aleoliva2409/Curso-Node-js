console.log('inicio de programa') // 1

setTimeout(() => {
  console.log('primer Timeout') // 5
},3000)

setTimeout(() => {
  console.log('segundo Timeout') // 3
},0)

setTimeout(() => {
  console.log('tercer Timeout') // 4
}, 0)

console.log('Fin de programa') // 2