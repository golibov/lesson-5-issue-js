"use strict";



//==================> 1-masala  <==================
// const arr = [
//     { id: 1, name: 'Botir', age: 20, hobby: 'Football' },
//     { id: 2, name: 'Anvar', age: 22, hobby: 'Basketball' },
//     { id: 3, name: 'Shoxruh', age: 20, hobby: 'Basketball' },
//     { id: 4, name: 'Akrom', age: 20, hobby: 'Football' }
// ];
// let nameArr = [];
// function aboutUser() {

//     for (let i = 0; i < arr.length; i++) {
//         if ((arr[i].age) > 20) {
//             nameArr.push(arr[i].name);
//             console.log(nameArr);
//         }

//     }
// }
// aboutUser()


//==================> 3-masala  <==================

// let number = [22, 112, 3, 4, 222, 123, 43];
// function max(arr) {
//     for (let num of arr) {
//         let sum = arr[0];
//         if (num >= max) {
//             max = num;

//         }
//         arr.unshift(max);

//         return arr
//     }
// }
// const res = max(number);
// console.log(res);



// ==================> HOMEWORK <==================

// =============> 5-rasm <==================

// ======> 1-masala <=========

// const arr = [
//     { id: 1, name: 'Botir', age: 20, hobby: 'Football' },
//     { id: 2, name: 'Anvar', age: 22, hobby: 'Basketball' },
//     { id: 3, name: 'Shoxruh', age: 20, hobby: 'Basketball' },
//     { id: 4, name: 'Akrom', age: 20, hobby: 'Football' }
// ];

// function hobbyAge(arr) {
//     const AgeHobby = {};

//     for (let i = 0; i < arr.length; i++) {
//         const key = arr[i].age + '-' + arr[i].hobby;
//         if (!AgeHobby[key]) {
//             AgeHobby[key] = [];
//         }
//        AgeHobby[key].push(arr[i].name);
//     }

//     for (const key in AgeHobby) {
//         if (AgeHobby[key].length > 1) {
//             console.log(AgeHobby[key].join(', '));
//         }
//     }
// }

// hobbyAge(arr);


// ======> 3-masala <=========

// let number = [22, 112, 3, 4, 222, 123, 43];
// function max(arr) {
//     for (let num of arr) {
//         let sum = arr[0];
//         if (num >= max) {
//             max = num;

//         }
//         arr.unshift(max);

//         return arr
//     }
// }
// const res = max(number);
// console.log(res);

// =======> 4-masala xato masala edi? Ustoz bu masalani tashlab ketela degandila...

// ======> 5-masala <=========

// function reverseArr(n) {
//     let array = [];
//     for (let i = 1; i <= n; i++) {
//         array.push(i);
//     }
//     let reversedArray = [];
//     for (let i = array.length - 1; i >= 0; i--) {
//         reversedArray.push(array[i]);
//     }

//     return reversedArray;
// }


// let n = parseInt(prompt("Son kiriting:"));
// console.log(reverseArr(n));




// ================> 6-rasm <==================

// =========> 1-masala <=========

// function toCalculate(a, action, b) {
//     if (action == "+") {
//         console.log(a + b);
//     } else if (action == "-") {
//         if (a > b) {
//             console.log(a - b);
//         } else {
//             console.log(b - a);
//         }
//     } else if (action == "*") {
//         console.log(a * b);
//     } else if (action == "/") {
//         if (a > b) {
//             console.log(a / b);
//         } else {
//             console.log(b / a);
//         }
//     }
// }
// toCalculate(40, '+', 50);
// toCalculate(40, '-', 50);
// toCalculate(10, '*', 50);
// toCalculate(2, '/', 50);

// =========> 2-masala <=========

// function sumArrayElements(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }


// let numbers = [1, 2, 3, 4, 5];
// console.log(sumArrayElements(numbers)); 



// =========> 3-masala <=========

// let arr = [-1, 2, -3, 4, -5];

// function positive(arr) {
//     let emptyArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             emptyArr.push(arr[i]);

//         }

//     }
//     console.log(emptyArr);
// }
// positive(arr)

// =========> 4-masala <=========

// let arr = ["5", 18, "3", "hello"];

// for (let i = 0; i < arr.length; i++) {

//     if (typeof arr[i] === 'string') {

//         if (!isNaN(arr[i])) {
//             arr[i] = Number(arr[i]);
//         } else if (arr[i] === "hello") {

//             arr[i] = 0;
//         }
//     }
// }

// console.log(arr);

// =========> 5-masala <=========

// const person = [
//     {
//         name: 'Abdulloh',
//         age: 19,
//         status: false
//     },
//     {
//         name: 'Ibrohim',
//         age: 20,
//         status: true
//     },
//     {
//         name: 'Shodiyor',
//         age: 18,
//         status: false
//     }
// ]

// function personFunc() {

//     for (let i = 0; i < person.length; i++) {
//         if (person[i].status == false) {
//             console.log(person[i].name);
//         }

//     }
// }
// personFunc()


// =========> 6-masala <=========
// let enterFirstNumber = +prompt("enter first number");
// let enterSecondNumber = +prompt("enter second number");
// let enterThirdNumber = +prompt("enter third number");


// function middleArithmetic() {
//     let emptyArr = [];
//     emptyArr.push((enterFirstNumber + enterSecondNumber + enterThirdNumber) / 3);
//     console.log(emptyArr);
// }
//  middleArithmetic()



// =========> 7-masala <=========

// let arr = [2, 3, 4, 5, 6];

// function change() {

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[0] % 2 == 0) {
//             arr[0] = arr[1];

//         }

//     }
//     console.log(arr);
// }
// change()

// =========> 8-masala <=========

// let arr1 = ['Salom', 'World', 'Java' ,'python'];
// let arr2 = ['hello', 'World', 'Java' ,'python'];

// function theSame (){

//     for (let i = 0; i < arr1.length; i++) {

//         if (arr1[i] == arr2[i]) {
//             console.log(arr1[i]);
//         }
//     }
// }
// theSame ()