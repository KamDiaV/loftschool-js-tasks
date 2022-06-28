const mixedArray = [3,13,74,14,66,15,22,4];
const isEven = num => {return num % 2 == 0;};

function filterArray(mixedArray, isEven) {
  return mixedArray.filter(isEven);
}

console.log(filterArray(mixedArray, isEven));

// const mixedArray = [3,13,74,14,66,15,22,4];
// const isEven = num => { /* code */ };

// console.log(filterArray(mixedArray, isEven));

// Создайте функцию которая в качестве аргумента принимает целое число, 
// и проверяет четное оно или нет. Затем создайте произвольный массив целых чисел. 
// И используя функцию проверки числа на четность, создайте из готового массива новый, 
// который будет содержать только четные числа. Результат выведите в консоль.



// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]




