function sumar (a,b) {
  return a + b;
}

console.log(sumar(5,10))

const sumarArrow = (a,b) => {
  return a + b;
}

const sumarArrow2 = (a,b) => a + b;

console.log(sumarArrow(5,10))
console.log(sumarArrow2(5,10))


function saludar() {
  return 'Hola Mundo'
}

const saludarArrow = () => 'Hola Mundo'

console.log(saludar())
console.log(saludarArrow())
