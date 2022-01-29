const deadpool = {
  name: 'Wade',
  lastname: 'Winston',
  power: 'Regeneration',
  getPower: function() {
    return `${this.name} ${this.lastname}`
  }
}


// const name = deadpool.name
// const lastname = deadpool.lastname
// const power = deadpool.power


// const {name, lastname, power} = deadpool

// console.log(name, lastname, power)

// console.log(name, lastname, power, age = 0)



function printHero(hero) {
  const {name, lastname, power} = hero
  console.log(name, lastname, power)
}

printHero(deadpool)


// DESTRUCTURING ARRAYS 

const heros = ['Deadpool' , 'Superman' , 'Batman']

// const h1 = heros[0]
// const h2 = heros[1]
// const h3 = heros[2]

// console.log(h1, h2, h3)

const [h1, h2, h3] = heros

console.log(h1, h2, h3)