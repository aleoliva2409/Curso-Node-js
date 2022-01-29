const workers = [
  {
    id: 1,
    name: "Alejandro",
  },
  {
    id: 2,
    name: "Cristian",
  },
  {
    id: 3,
    name: "Roberto",
  },
];

const salaries = [
  {
    id: 1,
    salary: 1000,
  },
  {
    id: 2,
    salary: 1500,
  },
];


const getWorker = (id, callback) => {
  
  //* ACA TENEMOS 2 MANERAS DE ESCRIBIR NUESTRA PROMESA
  // const promise = new Promise((resolve, reject) => {
    
  //   const worker = workers.find((worker) => worker.id === id)?.name

  //   if (worker) {
  //     resolve(worker)
  //   } else {
  //     reject('don´t exist worker')
  //   }
  // })

  // return promise

  return new Promise((resolve, reject) => {
    const worker = workers.find((worker) => worker.id === id)?.name;

    if (worker) {
      resolve(worker);
    } else {
      reject("don´t exist worker");
    }
  });

};

const getSalary = id => {
  return new Promise((resolve, reject) => {
    const salary = salaries.find((salary) => salary.id === id)?.salary

    salary ? resolve(salary) : reject("don´t exist this salary");
  })
}

const id = 5

//* ACA PODEMOS EJECUTAR LAS FUNCIONES DE MANERAS DIFERENTES  

// getWorker(id)
//   .then((worker) => console.log(worker))
//   .catch((err) => console.error(err))

// getSalary(id)
//   .then((salary) => console.log(salary))
//   .catch(err => console.error(err))


getWorker(id)
  .then((worker) => {
    console.log(worker);
    getSalary(id)
      .then(salary => console.log(salary))
      .catch(err => console.error(err))
  })
  .catch((err) => console.error(err))