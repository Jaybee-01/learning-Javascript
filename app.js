// Basics
// console.log("Hello");
// console.log("I like pizza");

// Alert box
// window.alert("This is an alert")
// window.alert("I like pizza")

// Changing the text content of html elements.
// select the element, then change
// document.getElementById(`myH1`).textContent = "Hello"

// document.getElementById(`myP`).textContent = "I like pizza"

// Variables: A container that stores a value, It behaves as if it were the value it contains.

// 1. declaraton let ;
// 2. assignment x = 100;

// let x = 123;
// console.log(x);

// // data types
// // Number eg
// let age = 23;
// let price = 10.99;
// let gpa = 4.70;
// console.log(`You are ${age} years old`);
// console.log(`The price is ${price}`);
// console.log(`Your gpa is ${gpa} `);

// // String eg
// let firstName = "Joshua"
// let favouriteFood = "chicken"
// let email = "emmanuelagbo348@gmail.com"
// console.log(favouriteFood);

// // Booleans - either True or False
// let online = true;
// let forSale = false;
// console.log(`Joshua is online: ${online}`);
// console.log(`Is this car for salee: ${forSale}`);

// // to knw type of datatype
// console.log(typeof age);

// let fullName = "Joshua Agbo"
// let age = 26;
// let student = true;

// document.getElementById(`p1`).textContent = `Your name is ${fullName}`;

// document.getElementById(`p2`).textContent = `You are ${age} years old`
// document.getElementById(`p3`).textContent = `you are a student: ${student}`

// Arithmetic operators: Operands{values, variables, etc} operators{-+*/}

// let students = 30;
// students = students + 1;
// students = students - 1;
// students = students * 2 ;
// students = students / 2 ;
// students = students ** 2 ;
// let extraStudents = students % 3 ;
// console.log(extraStudents);

// Augmented operators;
// students += 1;
// students -= 1;
// students *= 2;
// students /= 2;
// students **= 2;
// students %= 2;

// Increment and decrement operator
// by only 1
// students++;
// students--;
// console.log(students);

// Operator precedence
// 1. Parenthesis ()
// 2. exponents
// 3. * and / and %
// 4. addition and subtraction

// let results = 1 + 2 * 3 + 4 ** 2;
// console.log(results);

// Accepting User inputs
// 1. Easy way - windows prompts
// 2. prof way - Html textbox

// easy way
// let username = window.prompt(`Whats your username`)

// console.log(`Your username is: ${username}`);

// Professional way
// let username;
// document.getElementById(`mySubmit`).onclick = function () {
//   username = document.getElementById(`myText`).value;

//   document.getElementById(`myH1`).textContent = `${username} you are welcome`;
// };


// Type conversion: changing the datatype of a value to another(strings, numbers, booleans)

// let age = window.prompt(`How old are you`)
// age = Number(age)
// age+=1;
// console.log(age);
// console.log(typeof age);

// let x;
// let y;
// let z;

// x = Number(x)
// y = String(y)
// z = Boolean(z)

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// NB: When accepting user input do typeconversion

// CONST: a variable that can't be changed

// const PI = 3.14159;
// let radius;
// let circumference;

// radius = window.prompt(`Enter the radius of a circle`)
// radius = Number(radius)
// circumference = 2 * pi * radius;
// console.log(circumference);

// NB: capitalizing your const variables is only for primitive data types(Numbers and booleans), reference data types such as strings dont follow this convension.

// document.getElementById('calculate').onclick = function(){
//     radius = document.getElementById('myRadius').value
//     radius = Number(radius);
//     circumference = 2 * PI * radius;

//     document.getElementById('myResult').textContent += circumference +"cm";
// }

// Math: build-in object that provides a collection of properties and methods

// console.log(Math.PI);
// console.log(Math.E);

// example
// let x = 3;
// let y = 2;
// let z = 1;


// z = Math.round(x) (To round a number)
// z = Math.floor(x) (To round down)
// z = Math.ceil(x) (To round up)

// 19th July 2025

// z = Math.trunc(x) - (To eliminate a decimal portion)
// z = Math.pow(x, y) - (To raise to a given power)
// z = Math.sqrt(x) - (Square root)
// z = Math.log(x) - (log of a number)
// z = Math.sin(x) - (for sin) 
// z = Math.cos(x) - (for cosine)
// z = Math.tan(x)  - (for tangent)
// z = Math.abs(x) - (for absolute number but positive)
// z = Math.sign(x)   (sign of a number)
// let max = Math.max(x, y, z); - (maximum number)
// let max = Math.min(x, y, z); - (Minimum number)
// console.log(max)

// to generate a randm number from 1 - 10

let min = 1;
let max = 10;
let randomNumber = Math.floor(Math.random() * max + min) + 1

console.log(randomNumber);
