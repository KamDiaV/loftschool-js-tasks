const workers = [
  {"name":"John","salary":500},
  {"name":"Mike","salary":1300},
  {"name":"Linda","salary":1500}];

console.log(getWorthyWorkers(workers));

// Сформировать функцию в которую будет передан в качестве аргумента этот массив и возвращен 
// из функции массив содержащий имена всех сотрудников, чья зарплата превышает 1000.

function getWorthyWorkers(workers) {
  let names = []; 
  workers.forEach((worker) => {
    if (worker.salary > 1000) {
      names.push(worker.name);
    } 
  });
  return names;
}

// arr.forEach(function callback(currentValue, index, array) {
//   //your iterator
// }[, thisArg]);