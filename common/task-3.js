const path = "/users/download/index.html";

console.log(isHtml(path));

// Написать функцию которая будет принимать в качестве аргумента строку имитирующую адрес до файла. 
// Функция должна возвращать true или false в зависимости от того есть у этого файла расширение html или нет.

// console.log(path.slice(-5));

function isHtml(path) {
  return path.slice(-5) == '.html'; 
}


