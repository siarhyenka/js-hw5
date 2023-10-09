// 1. Сделайте функцию, которая отнимает от первого числа второе и делит на
// третье. Числа передаются параметром.

// const calculation = function (a, b, c) {
//     return (a - b) / c;
// }

// let result = calculation(21, 3, 2);
// console.log(result);

// 2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число
// передается параметром.


// const exponentiation = function (number) {
//     return console.log(`Квадрат: ${number ** 2}, куб: ${number ** 3}`);
// }

// exponentiation(3);

// Напишите функции min и max, которые возвращают меньшее и большее из
// чисел a и b.


// const minValue = function (a, b) {
//     if (a < b) {
//         console.log(`Наименьшее число: ${a} `);
//     } else {
//         console.log(`Наименьшее число ${b}`);
//     }
// }

// const maxValue = function (a, b) {
//     if (a > b) {
//         console.log(`Наибольшее число: ${a}`);
//     } else {
//         console.log(`Наибольшее число: ${b}`);
//     }
// }

// minValue(14,8);
// maxValue(14, 8);

// 4. Напишите две функции: первая ф-ция должна возвращать массив с
// числовыми значениями, диапазон которых должен вводиться пользователем
// с клавиатуры; вторая – выводить полученный массив.

// const creatingAnArray = function (length) {
//     let arr = [];
//     for (let i = 0; i <= length; i++) {
//         arr.push(i);
//     }
//     return arr;
// }
// console.log(creatingAnArray(5))

// let result = creatingAnArray(6);

// const arrayOutput = function (result) {
//     for (let i = 0; i < result.length; i++) {
//         console.log(result[i]);
//     }    
// }
// arrayOutput(result)


// 

// 5. Сделайте функцию isEven() (even - это четный), которая параметром
// принимает целое число и проверяет: четное оно или нет. Если четное - пусть
// функция возвращает true, если нечетное — false.

// const isEven = function (number) {
//     return number % 2 === 0 ? true : false;
// }
// isEven(5);

// let arr = [2, 4, 3, 5, 7, 8, 22, 48];

// const arrIsEven = function (arr) {
//     let arr2 = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (isEven(arr[i])) {
//             arr2.push(arr[i])
//         } 
//     }
//     console.log(arr2)
//     return arr2;
// }

// arrIsEven(arr);

// 7. Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные
//     циклы):
//     1
//     22
//     333
//     4444
//     55555
//     666666
//     7777777
//     88888888
//     999999999
//     Кол-во рядов должно вводиться параметром. Если пользователь ввел доп.
//     параметр, непредусмотренный ф-цией по умолчанию - один любой символ,
//     кроме пробела, то пирамида должна быть нарисована этим символом,
//     например:

// 1 варик
//const piramid = function(height) {
    
    
//    if ( arguments[1] && arguments[1] !== ' ') {
//    console.log(arguments[1])
//     for (let i = 1; i <= height; i++) {
//         let count1 = '';
//         for (let j = 0; j < i; j++) {
//             count1 = count1 + arguments[1];  
//         }
//         console.log(count1);   
//     }      
//    } else {
    
//     for (let i = 1; i <= height; i++) {
//         let count = '';
//         for (let j = 0; j < i; j++) {
//             count = count + i;  
//         }
//         console.log(count);   
//     }      
        
//     }


// 2 варик 


// for (let i = 1; i <= height; i++) {
//     let count = '';
//     for (let j = 0; j < i; j++) {
//         if ( arguments[1] && arguments[1] !== ' ') {
//             count = count + arguments[1];
//         } else {
//             count = count + i;
            
//         }
//     }
//     console.log(count);
// }
//     return height;
// }
// piramid(9);


// 8. Напишите ф-цию, которая рисует равнобедренный треугольник из
// звездочек:
// *
// ***
// *****
// *******
// *********
// Кол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же фцию, но которая выведет перевернутый треугольник. 

// const cristmasThree = function (starsLadder) {
// let h = starsLadder;
// let space = '';
// let star = '';

// for (let i = 1; i <= h; i++) {
//     for(let j = 1; j <= h - i; j++) {
//         space = space + ' ';
//     }

//     for (let k = 1; k <= i*2-1; k++) {
//         star = star + '*'
//     }
//     console.log(space + star);
//     space = '';
//     star = '';
// }
// }

// cristmasThree(8)


// 9. Напишите ф-цию, которая возвращает массив заполненный числами
// Фибоначи от 0 до 1000.
// const fib = function (length) {
//     let arr = [];
//     for (let i = 0; i <= length; i++) {   
//         if ( i === 0) {
//             arr.push(i)
//         } else {
//             arr.push(arr[i -1] + arr[i -2]);
//         }
//     }
//     console.log(arr);
//     return arr;
// }

// fib(30)


// 10. Дано число. Сложите его цифры. Если сумма получилась более 9-ти,
// опять сложите его цифры. И так, пока сумма не станет однозначным числом
// (9 и менее). Исп. Рекурсию.


// const sumOfTheNumber = function (num) {
//     let secondNumber = num % 10;
//     let firstNumber = (num - secondNumber) / 10;  
//     let sum = secondNumber + firstNumber;

//     if (sum >= 9 ) {

//     }

    

    
// }


// 11. Дан массив с числами (передается параметром). Выведите
// последовательно его элементы, используя рекурсию и не используя цикл.

// const creatingAnArray = function (arr) {
//     console.log(arr[i]);
//     i++;
//     if (i < arr.length) {
//         creatingAnArray(arr);
//     }
// }

// let i = 0;
// creatingAnArray([1, 3, 44, 23, 68]);
