// setTimeout(function() {
//   console.log('Hola Mundo')
// }, 1000)


// setTimeout(() => {
//   console.log('Hola Mundo')
// }, 1000)

const getUserById = (id,callback) => {
  const user = {
    id,
    name: 'Alejandro'
  }

  setTimeout(() => {
    callback(user)
  },1500)
}

getUserById(10, user => {
  console.log(user.id)
  console.log(user.name)
})


