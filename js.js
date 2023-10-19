// №286 1

// function func(num1, num2, num3, num4, num5) {
// 	return num1 + num2 + num3 + num4 + num5;
// }
// let arr = [1, 2, 3, 4, 5];
// console.log(func(...[1, 2, 3, 4, 5])); 

// 287 №1⊗jsPmSOAE

// Не запуская код, определите, что выведется в консоль:

// function func(n1, n2, n3, n4, n5, n6, n7, n8) {
// 	return (n1 + n2 + n3 + n4) * (n5 + n6 + n7 + n8);
// }

// console.log( func(1, ...[2, 3, 4], 5, ...[6], ...[7, 8]) );

// Ответ 260

// 288 1
// Дан массив с числами. Используя Math.min и spread выведите на экран минимальное значение массива.

// let arr = [1, 2, 3, 4, 5];

// let max = Math.min(...(arr));

// console.log(max);

// 289 1

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let arr  = ['a', ...arr1, 'b', 'c', ...arr2];
// console.log(arr);

// (9) ['a', 1, 2, 3, 'b', 'c', 4, 5, 6]


// 289 2
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let arr  = ['a', ...arr1, ...arr1, 'b', 'c'];
// console.log(arr);

// ['a', 1, 2, 3, 1, 2, 3, 'b', 'c']
// 289 3
// let arr1 = [1, 2, 3];
// let arr2 = [...arr1, 4, 5, 6];

// let arr  = ['a', 'b', 'c', ...arr2];
// console.log(arr);
// (9) ['a', 'b', 'c', 1, 2, 3, 4, 5, 6]
// 289 4
// let arr1 = [1, 2, 3];
// let arr2 = [...arr1, 4, 5, 6];
// let arr3 = [...arr2, 7, 8, 9];

// let arr  = [0, ...arr3];
// console.log(arr);
// (10) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// 289 5
// let arr1 = [1, 2, 3];
// let arr2 = [...arr1];

// console.log(arr2);

// [1, 2, 3]

// 290 1
// let arr = [...'12345'];
// console.log(arr);
// ['1', '2', '3', '4', '5']
// 290 2
// let arr = ['a', ...'12345'];
// console.log(arr);
// ['a', '1', '2', '3', '4', '5']
// 290 3
// let arr = [...'12345', ...'56789'];
// console.log(arr);
// (10) ['1', '2', '3', '4', '5', '5', '6', '7', '8', '9']
// 290 4
// let arr1 = ['a', 'b', 'c'];
// let arr2 = [...arr1, ...'12345'];

// console.log(arr2);
// (8) ['a', 'b', 'c', '1', '2', '3', '4', '5']