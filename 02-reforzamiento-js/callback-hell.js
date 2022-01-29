const workers = [
  {
    id: 1,
    name: 'Alejandro'
  },
  {
    id: 2,
    name: 'Cristian'
  },
  {
    id: 3,
    name: 'Roberto'
  }
];

const salaries = [
  {
    id: 1,
    salary: 1000
  },
  {
    id: 2,
    salary: 1500
  }
]

const getWorker = (id, callback) => {
  const worker = workers.find(worker => worker.id === id);

  if (worker) {
    callback(null,worker)
  } else {
    callback(`No exist worker`)
  }

  
}

// console.log(getWorker(5))

getWorker(10,(err, worker) => {
  if (err) {
    console.log('ERROR!')
    return console.log(err)
  }

  console.log('worker exist')
  console.log(worker)
})


const getSalary = (id,callback) => {
  const salary = salaries.find(salary => salary.id === id)

  if (salary){
    callback(null,salary)
  } else {
    callback("no exist this person")
  }
}

getSalary(10,(err,salary) => {

  if (err){
    console.log('ERROR!')
    return console.error(err)
  }

  console.log('this is salary')
  console.log(salary)
})