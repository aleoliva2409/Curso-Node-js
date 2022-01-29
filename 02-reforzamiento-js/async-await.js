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



const getInfoWorker = async (id) => {
  try {
    const worker = await getWorker(id);
    const salary = await getSalary(id);
    
    return `${worker} has salary ${salary}`
  } catch (err) {
    return err
  }
  
}

const id = 3

getInfoWorker(id)
  .then(msg => console.log(msg))
  .catch(err => console.log(err))


