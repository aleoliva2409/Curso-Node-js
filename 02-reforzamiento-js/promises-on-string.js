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
  return new Promise((resolve, reject) => {
    const worker = workers.find((worker) => worker.id === id)?.name;

    if (worker) {
      resolve(worker);
    } else {
      reject("don´t exist worker");
    }
  });
};

const getSalary = (id) => {
  return new Promise((resolve, reject) => {
    const salary = salaries.find((salary) => salary.id === id)?.salary;

    salary ? resolve(salary) : reject("don´t exist this salary");
  });
};

const id = 3;
let name

getWorker(id)
  .then((worker) => {
    name = worker
    return getSalary(id)
  })
  .then(salary => console.log(name,salary))
  .catch((err) => console.error(err))