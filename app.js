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

// let min = 5;
// let max = 10;
// let randomNumber = Math.floor(Math.random() * (max - min)) + min

// console.log(randomNumber);

// 21st July 2025

// IF statment: if a condition is true, execute soe code, if not do something else

// example 1

// let age = 16;

// if(age >= 18){
//     console.log(`You are old enough to enter this site`);
// } else {
//     console.log(`You must be 18+ to enter this site`);
// }

// example 2

// let time = 14;
// if(time <= 12){
//     console.log(`Good morning`);
// } else {
//     console.log(`Good afternoon`);
// }

// example 3 - boolean variables

// let isStudent = true;
// if (isStudent) {
//   console.log(`You are a student`);
// } else {
//   console.log(`You are not a student`);
// }

// Nested if
// let hasLicensed = true;

// if (age >= 16) {
//   console.log(`You are old enough to drive`);
//   if (hasLicensed) {
//     console.log(`You have your licensed`);
//   } else {
//     console.log(`You do not have your license yet`);
//   }
// } else {
//   console.log(`You must be 16+ to have a license`);
// }

// If else statment
// const myText = document.getElementById("myText");
// const ageResult = document.getElementById(`ageResult`);
// const submitBtn = document.getElementById(`submitBtn`);
// let age;

// submitBtn.onclick = () => {

//   age = Number(myText.value);

//   if (age >= 100) {
//     ageResult.textContent = `You are too old to enter this site`;
//     // console.log(`You are too old to enter this site`);
//   } else if (age == 0) {
//     ageResult.textContent = `You cant enter you are just born`;
//     // console.log(`You cant enter you are just born`);
//   } else if (age >= 18) {
//     ageResult.textContent = `You are old enough to enter this site`;
//     // console.log(`You are old enough to enter this site`);
//   } else if (age < 0) {
//     ageResult.textContent = `Your age cannot be below 0`;
//     // console.log(`Your age cannot be below 0`);
//   } else {
//     age = Number(age);
//     ageResult.textContent = `You must be 18+ to enter this site`;
//     // console.log(`You must be 18+ to enter this site`);
//   }
// };

// exercise using the code above

// .Checked property: property that determines the checked state of an HTML checkbox or radio button element

// exercise for payment

// const myCheckbox = document.getElementById(`myCheckbox`);
// const paypal = document.getElementById(`paypal`);
// const visa = document.getElementById(`visa`);
// const master = document.getElementById(`master`);
// const subResult = document.getElementById(`subResult`);
// const payResult = document.getElementById(`payResult`);
// const submitBtn = document.getElementById(`submitBtn`);

// submitBtn.addEventListener("click", () => {
//   if (myCheckbox.checked) {
//     subResult.textContent = `You have a subscription`;
//   } else {
//     subResult.textContent = `You are not subscribed`;
//   }

//   if (paypal.checked) {
//     payResult.textContent = "Your payment method is PayPal";
//   } else if (visa.checked) {
//     payResult.textContent = "Your payment method is Visa Card";
//   } else if (master.checked) {
//     payResult.textContent = "Your payment method is MsterCard";
//   } else {
//     payResult.textContent = `You must select a payment method`;
//   }
// });

// Tenary operator: a shortcut to if{} and else{} statements helps to assign a variable base on a condition.
//  - condition ? codeifTrue : codeIfFalse;

// example
// let age = 12;
// let message = age >= 18 ? `You are old enough` : "You are a minor";
// console.log(message);

// // example 2
// let time = 16;
// let greeting = time < 12 ? 'Good morning' : 'Good afternoon';
// console.log(greeting);

// example 3
// let isStudent = false;
// let message = isStudent ? 'You are a student' : 'You are not a student';
// console.log(message);

// example 4
// let purchaseAmount = 99;
// let discount = purchaseAmount >= 100 ? 10 : 0;
// console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);

// SWITCH: can be an efficient replacement to many else if statements

// example 1
// let day = 3;
// switch (day) {
//   case 1:
//     console.log("This is monday");
//     break;
//   case 2:
//     console.log("This is Tuesday");
//     break;
//   case 3:
//     console.log("This is Wednesday");
//     break;
//   case 4:
//     console.log("This is Thursday");
//     break;
//   case 5:
//     console.log("This is Friday");
//     break;
//   case 6:
//     console.log("This is Saturday");
//     break;
//   case 7:
//     console.log("This is Sunday");
//     break;

//   default:
//     console.log(`${day} is not a day`);
//     break;
// }

// :break; - breaks out of a switch after a condition is found

// example 2;
// let testScore = 32;
// let letterGrade;

// switch (true) {
//   case testScore >= 90:
//     letterGrade = "A";
//     break;
//   case testScore >= 80:
//     letterGrade = "B";
//     break;
//   case testScore >= 70:
//     letterGrade = "C";
//     break;
//   case testScore >= 60:
//     letterGrade = "D";
//     break;
//   case testScore >= 50:
//     letterGrade = "E";
//     break;
//   default:
//     letterGrade = "F";
//     break;
// }
// console.log(letterGrade);

// STRING:  allow you to manipulate and work with text(strings)

// let userName = "Jay bee";
// builtin methods in string
// console.log(userName.charAt(2));    // get character at any index
// console.log(userName.indexOf('e')); // first occurence
// console.log(userName.lastIndexOf('e')); // last occurence
// console.log(userName.length); // length of a string
// console.log(userName.trim()); // remove white spaces before
// console.log(userName.trim()); //.... and after
// console.log(userName.toUpperCase()); // all to uppercase
// console.log(userName.toLowerCase()); // all to lowercase
// console.log(userName.repeat(3)); // repeating a string
// console.log(userName.startsWith(' ')); // checks if a string starts with a given character
// console.log(userName.endsWith(' ')); // checks if a string ends with a given character
// console.log(userName.includes(' ')); // checks if a string contains a given character

// example
// let phoneNumber = '123-456-7890';
// phoneNumber = phoneNumber.replaceAll('-', '') // replaces a character with another
// phoneNumber = phoneNumber.padStart('15', '0') // pad a string with a given character till it reaches a given length
// phoneNumber = phoneNumber.padEnd('15', '0') // opposite of padstart
// console.log(phoneNumber);

// String slicing: process of creating a substring from a portion of another string. string.slice(start, end)

// example
// const fullName = "Jay bee";
// let firstName = fullName.slice(0, 3);
// let lastName = fullName.slice(4)
// let firstChar = fullName.slice(0, 1)
// let lastChar = fullName.slice(-3)

// let firstName = fullName.slice(0, fullName.indexOf(" "))
// let lasttName = fullName.slice(fullName.indexOf(" ") + 1)

// console.log(firstName);
// console.log(lasttName);

// example 2
// const email = "emmanuelagb0348@gmail.com"
// let username = email.slice(0, email.indexOf("@"))
// let extension = email.slice(email.indexOf("@"))
// console.log(username);
// console.log(extension);

// Method chaining: calling one method after another in one continuous line of code

// No method chaining
// let userName = window.prompt("Enter your username: ");
// userName = userName.trim();
// let firstLetter = userName.charAt(0)
// firstLetter = firstLetter.toUpperCase();
// let extraLetters = userName.slice(1);
// extraLetters = extraLetters.toLowerCase();
// userName = firstLetter + extraLetters;
// console.log(userName);

// // Method chaining
// userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();
// console.log(userName);

// Logical operators: used to combine or manipulate boolean values( true or false )
// AND - &&, OR - ||, NOT - !

// example 1
// const temp = 25;
// if (temp <= 0 || temp > 30) {
//   console.log(`The weather is BAD`);
// } else {
//   console.log(`The Weather is Good`);
// }

// example 2
// const isSunny = true;
// if (!isSunny) {
//   console.log(`It is sunny`);
// } else {
//   console.log(`It is cloudy`);
// }
// other operators:
// = - assignment operator
// == - comparison operator(compare if values are equal)
// === - strict equality operator (compare if values and datatype are equal)
//  != - inequality operator
// !== - strict inequality operator

// example strict equality.
// const PI = 3.14;
// if (PI === "3.14") {
//   console.log(`that is pi`);
// } else {
//   console.log(`this is not PI`);
// }

// 22nd July 2025.

//While Loop: repeat some code while some condition is true

// let userName = ""
// while (userName === "" || userName === null) {
//     userName = window.prompt("Enter your usernmae: ")
//     console.log(`You didn't enter your name`);
// }
//     console.log(`Hello ${userName}`);

// do while loop - performs the code at least once
// let username;
// do {
//   username = window.prompt("Enter name: ");
// } while (username === "" || username === null);
// console.log(`Hello ${username}`);

// let loggedIn = false;
// let username;
// let password;

// do {
//   username = window.prompt("Enter username: ");
//   password = window.prompt("Enter password: ");
//   if (username === "myUsername" || password === "myPassword") {
//     loggedIn = true;
//     console.log("You are logged in");
//   } else {
//     console.log(`Invalid credentials please try again`);
//   }
// } while(!loggedIn)

// For loop: repeat some code a LIMITED amount of times
// - statement, condition, increment
// for(let i = 10; i > 0; i--){
//     console.log(i);
// }
// console.log('Happy new year');

// continue - skips a loop
// break - breaks out of the loop completely
// for(let i = 1; i <= 20; i++){
//     if(i == 13){
//         break;
//     } else{
//     console.log(i);
// }}
// console.log('Happy new year');

// Number guessing game generated

// Function: a section of reusable code.
// Declare code once, use it whenever you want
// Call the function to execute that code.

// example 1
// parameters - values you pass to the function
// order of parameters matters.
// function happyBirthday(username, age) {
//   console.log(`Happy birthday dear ${username}`);
//   console.log(`You are ${age} years old`);
// }
// happyBirthday("Joshua", 25);
// // arguments - what you send to the function

// // return keyword:
// // add function
// function add(x, y) {
//   return x + y;
// }
// // sub function
// function sub(x, y) {
//   return x - y;
// }
// // mul function
// function mul(x, y) {
//   return x * y;
// }
// // divide function
// function div(x, y) {
//   return x / y;
// }
// is EVEN?
// function isEven(number) {
//   if (number % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// tenary(shortcut)
// function isEven(number) {
//  return number % 2 == 0 ? true : false;
// }
// console.log(isEven(30));

// example 3
// function isValidEmail(email) {
// if(email.includes('@')){
//   return true
// } else {
//   return false;
// }
//   return email.includes('@') ? true : false;
// }
// console.log(isValidEmail('josh1@gmail.com'));
// console.log(isValidEmail('josh1gmail.com'));

// 24th July 2025

// Variable Scope: where a variable is recognized and accessible( local or global).

// example
// let x = 3;
// function function1(){
//   let x = 1;
//   console.log(x);

// }
// function function2(){
//   let x = 2;
//   console.log(x);
// }

// function1()
// function2()

// NB: any variable declared inside a function has a local scope or within a set of curly braces
// global is declared outside a function
// NB: local variables first(closest) since it is available before global.

// Arrays: a variable like structure that can hold more than one value

// let fruits = ['apple', 'orange', 'banana']

// you can even change one of this element by accessing one of this array at a given element
// fruits[0] = 'coconut'
// built-in Methods of Arrays
// fruits.push('coconut');  // add to the end
// fruits.pop();  // remove from the end
// fruits.unshift("mango") // add to the begining
// fruits.unshift("mango") // remove from the begining
// let numOfFruits = fruits.length // length of an array
// let index = fruits.indexOf("mango") // getting the index of an element

// looping through an array and displaying them

// let fruits = ["apple", "orange", "banana"];

// // for (let i = 0; i < fruits.length; i++) {
// //   console.log(fruits[i]);
// // }
// // in reverse
// // for (let i = fruits.length -1; i >= 0; i--) {
// //   console.log(fruits[i]);
// // }

// fruits.sort().reverse() // to sort an array / in reverse

// // advance for loop
// for(let fruit of fruits){
//     console.log(fruit);
// }

// Spread operator:  '...' allow an iterable such as an array or string to be expanded into separate elements (unpacks the element)

// from array to normal bracket
// let numbers = [1,2,3,4,5]
// let maximum = Math.max(...numbers)
// let minimum = Math.min(...numbers)
// console.log(minimum);

// // from string to array
// let username = 'Jay bee'
// let letters = [...username].join('-') //this unpacks the string to an array of letters
// console.log(letters);

// let fruits = ['apple', 'orange', 'banana']
// let vegetables = ['carrot', 'celery', 'potatoes']

// let foods = [...fruits, ...vegetables, 'eggs', 'milk'] // joining two arrays and also adding other elements
// console.log(foods);

// Rest Parameters: (...rest) allow a function work with a variable number of argument by bundling them into an array.

// spread - expands an array into separate elements (used when we have an array or any collection of somtheing)
// Rest - bundles separate element into an array (used as parameters)

// example 1
// const food1 = "Pizza";
// const food2 = "Hamburger";
// const food3 = "Hotdog";
// const food4 = "Sushi";

// function openFridge(...foods) {
//   console.log(foods);
// }
// function getFood(...foods) {
//     return foods;
// }
// openFridge(food1, food2, food3, food4);

// let foods = getFood(food1, food2, food3, food4)
// console.log(foods);

// example 2
// function sum(...numbers) {
//     let results = 0

//     for(let number of numbers){
//         results += number;
//     }
//     return results;
// }
// const total = sum(1,2,3,4,5)
// console.log(`Your total is $${total}`);

// example 3
// // calculating average of scores
// function getAverage(...numbers) {
//     let results = 0

//     for(let number of numbers){
//         results += number;
//     }
//     return results / numbers.length;
// }

// const averageN = getAverage( 60, 69, 50, 90, 87);
// console.log(`The average is ${averageN}`);

// example 4 - combining strings
// function combineStrings(...strings) {
//     return strings.join(" ");
// }
// let myFullName = combineStrings('Mr', 'Joshua', 'Agbo', 'II')
// console.log(`Your full name is ${myFullName}`);

// 25th July 2025
// Password Generator App

// 26th July 2025

//Callbacks: a function that is passed as an argument to another function

//  used to handle asynchronous operations:
// 1. Reading a file
// 2. Network requests
// 3. Interacting with databases

// 'Hey! when you're done, call this next'

// example 1

// hello(wait);

// function hello(me) {
//   console.log("Hello!");
//   me();
// }

// function leave() {
//   console.log("Leave!");
// }
// function wait() {
//   console.log("Wait!");
// }

// function goodBye() {
//   console.log("Goodbye!");
// }
// by using callbacks we are guarantying that the function passed in will be executed next

// // example 2
// function sum(callback, a, b) {
//   let result = a + b;
//   callback(result);
// }
// function displaySum(result) {
//   document.getElementById("mySum").textContent = `The sum is: ${result}`;
// }
// sum(displaySum, 100, 50);

// forEach(): method used to iterate ovr the elements of an array and apply a specified function(callback) to each element
// array.forEach(callback)
// NB: behind the scenes the foreach method provides for us: an element, index, and array

// example 1
// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(cube);
// numbers.forEach(display);

// function display(element) {
//   console.log(element);
// }
// // double
// function double(element, index, array) {
//   array[index] = element * 2;
// }
// // thripple
// function thripple(element, index, array) {
//   array[index] = element * 3;
// }
// // sqaured
// function Square(element, index, array) {
//   array[index] = Math.pow(element, 2);
// }
// // cube
// function cube(element, index, array) {
//   array[index] = Math.pow(element, 3);
// }

// let fruits = ["apple", "orange", "banana", "coconut"];

// fruits.forEach(capitalizeFirstLetter);
// fruits.forEach(display);

// function uppercase(element, index, array) {
//   array[index] = element.toUpperCase();
// }
// function lowercase(element, index, array) {
//   array[index] = element.toLowerCase();
// }

// function capitalizeFirstLetter(element, index, array) {
//   array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }
// function display(element) {
//   console.log(element);
// }

// Map method: accepts a callback and applies that function to each element of an array, then return a new array

// example 1
// const numbers = [1, 2, 3, 4, 5];

// // const squares = numbers.map(square)
// const cubes = numbers.map(cube);
// console.log(cubes);

// function square(element) {
//   return Math.pow(element, 2);
// }

// function cube(element) {
//   return Math.pow(element, 3);
// }

// example 2

// const stundent = ["spongebob", "patrick", "squidward", "sandy"];

// function upperCase(element) {
//   return element.toUpperCase();
// }
// function lowerCase(element) {
//   return element.toLowerCase();
// }
// const studentsUpper = stundent.map(upperCase);
// const studentsLower = stundent.map(lowerCase);
// console.log(studentsLower);

// example 3
// const date = ["2024-1-10", "2025-2-20", "2026-3-30"];

// const formattedDates = date.map(arrangDate);
// console.log(formattedDates);
// function arrangDate(element) {
//   const parts = element.split("-");
//   return `${parts[2]}/${parts[1]}/${parts[0]}`;
// }

// Filter() - creates a new array by filtering out elements
// example
// let numbers = [1, 2, 3, 4, 5, 6, 7];
// // let evenNum = numbers.filter(isEven)
// let oddNum = numbers.filter(isOdd)
// console.log(oddNum);

// function isEven(element) {
//   return element % 2 === 0;
// }
// function isOdd(element) {
//   return element % 2 !== 0;
// }

// example 2
// const ages = [16, 17, 18, 18, 19, 20, 60];

// const adults = ages.filter(isAdult)
// const children = ages.filter(isChild)
// console.log(children);

// function isAdult(element){
//   return element >= 18;
// }
// function isChild(element){
//   return element < 18;
// }

// example 3
// const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];
// const shortWords = words.filter(getShortWords)
// const longWords = words.filter(getLongWords)
// console.log(longWords);

// function getShortWords(element) {
//   return element.length <= 6;
// }
// function getLongWords(element) {
//   return element.length > 6;
// }

// reduce()-  reduce the elements of an array to a single value

// example 1
// const prices = [5, 30, 10, 25, 15, 20];
// const total = prices.reduce(sum);
// console.log(`$${total.toFixed(2)}`);

// function sum(accumulator, element) {
//   return accumulator + element;
// }

// example 2
// const grades = [75, 50, 90, 80, 65, 95];
// const maxValue = grades.reduce(getMax)
// const minValue = grades.reduce(getMin)
// console.log(minValue);
// function getMin(accumulator, element){
//   return Math.min(accumulator, element)
// }
// function getMax(accumulator, element){
//   return Math.max(accumulator, element)
// }

// Function declaration - define a reusable block of code that performs a specific task. eg
// function hello() {
//   console.log("Hello");
// }
// Function expression - a way to define function as values or variables eg

// example 1
// const hello = function() {
//   console.log('hello');
// }
// hello()
// example 2
// setTimeout(function () {
//   console.log("Hello");
// }, 3000);

// const numbers = [1, 2, 3, 4, 5, 6];
// //squares
// const squares = numbers.map(function (element) {
//   return Math.pow(element, 2);
// });
// console.log(squares);

// //cubes
// const cubes = numbers.map(function (element) {
//   return Math.pow(element, 3);
// });
// console.log(cubes);

// // filtering even and odd numbers
// // even
// const isEven = numbers.filter(function (element) {
//   return element % 2 === 0;
// });
// console.log(`Odd numbers in numbers arrays are: ${isEven.join(", ")}`);
// // odd
// const isOdd = numbers.filter(function (element) {
//   return element % 2 !== 0;
// });
// console.log(`Odd numbers in numbers arrays are: ${isOdd.join(", ")}`);

// // suming and getting the max and min of the numbers array
// // sum
// const total = numbers.reduce(function (accumulator, element) {
//   return accumulator + element;
// });
// console.log(total);
// // max
// const maxNum = numbers.reduce(function (accumulator, params) {
//   return Math.max(accumulator, params);
// });
// console.log(maxNum);
// // min
// const minNum = numbers.reduce(function (accumulator, params) {
//   return Math.min(accumulator, params);
// });
// console.log(minNum);

// function expressions are used in: callbacks in asynchronous operations, higher-order functions, closures, event listeners

// ARROW FUNCTION: a concisr way to write function expressionsgood for simple functions that you use only once (parameters) => some code

// // example 1
// const hello = (name, age) => {
//   console.log(`Hello ${name}`);
//   console.log(`You are ${age} years old`);
// };
// hello("Josh", 26);

// example 2
// setTimeout(() => console.log("Hello"), 3000);

// example 3

// using arrow function for map, reduce and filter method(more concise way)
// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map((element) => Math.pow(element, 2)); //squares
// const cubes = numbers.map((element) => Math.pow(element, 3)); //cubes
// const isEven = numbers.filter((element) => element % 2 === 0); //even
// const isOdd = numbers.filter((element) => element % 2 !== 0); //odd
// const maxNum = numbers.reduce((accumulator, element) => Math.max(accumulator, element)); //max
// const minNum = numbers.reduce((accumulator, element) => Math.min(accumulator, element)); //min
// const sumNum = numbers.reduce((accumulator, element) => accumulator + element); // sum
// console.log(sumNum);

// Object:  collection of related properties and/or methods. Can represents real world objects. (people, products, places)
// object = {key: value; function()}

// example 1
// const person1 = {
//   fname: "Spongebob",
//   lname: "squarepants",
//   age: 30,
//   isEmployed: false,
//   sayHello: function () {
//     console.log("Hy i am spongebob");
//   },
//   eat: function () {
//     console.log("I am eating a krabby patty");
//   },
// };

// const person2 = {
//   fname: "Patrick",
//   lname: "Star",
//   age: 42,
//   isEmployed: false,
//   sayHello: function () {
//     console.log("Hy i am Patrick");
//   },
//   eat: () => {
//     console.log("I am eating roast beef, chicken, and pizza");
//   },
// };

// console.log(person1.fname);
// console.log(person1.lname);
// console.log(person1.age);
// console.log(person1.isEmployed);
// person1.sayHello();
// person1.eat();
// console.log(person2.fname);
// console.log(person2.lname);
// console.log(person2.age);
// console.log(person2.isEmployed);
// person2.sayHello();
// person2.eat();

// this: a reference to the object where this is used (the object depends o the immediate context)  person.name = this.name.

// example 1
// const person1 = {
//   name: 'spongebob',
//   favFood: 'Hamburgers',
//   sayHello: function(){
//     console.log(`HI i am ${this.name}`);
//   },
//   eat: function(){
//     console.log(`Hey i am eating ${this.favFood}`);
//   }
// }

// // Note: this keyword does not work with arrow function
// person1.sayHello()
// person1.eat()
// console.log(this);

// constructors: a special method for defining the properties and methods of objects

// // example
// function Car(make, model, year, color) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.color = color;
//   this.drive = function () {
//     console.log(`You drive the ${this.model}`);
//   };
// }
// // creating instance of the car object
// const car1 = new Car("Ford", "Mustang", 2024, "red");
// const car2 = new Car("Chevolet", "Camaro", 2025, "blue");

// console.log(car1.make);
// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.color);
// car1.drive();

// console.log(car2.make);
// console.log(car2.model);
// console.log(car2.year);
// console.log(car2.color);
// car2.drive();

// Class: (ES6 feature) provides a more structured and cleaner way to work with objects compared to the traditional constructor functions. ex static keyword, encapsulation, inheritance;

// class Product {
//   constructor(name, price){
//     this.name = name;
//     this.price = price;
//   }
//   displayProduct(){
//     console.log(`Product: ${this.name}`);
//     console.log(`Price: ${this.price.toFixed(2)}`);
//   }
//   calTotal(salesTax){
//     return this.price + (this.price  * salesTax)
//   }
// }
// const salesTax = 0.05;

// const product1 = new Product('shirt', 19.99)
// const product2 = new Product('pants', 22.50)
// const product3 = new Product('underwear', 100.50)
// product1.displayProduct();
// // product2.displayProduct();
// // product3.displayProduct();
// const total = product2.calTotal(salesTax);
// console.log(`The total including tax is: $${total.toFixed(2)}`);

// Static - keyword that defines properties or methods that belong to a class itself rather than the objects from that class (class owns anything static, not the object)

// example 1
// class mathUtil {
//   static PI = 3.14159;

//   static getDiameter(radius) {
//     return radius * 2;
//   }
//   static getCircum(radius) {
//     return 2 * this.PI * radius;
//   }
//   static getArea(radius) {
//     return this.PI * radius * radius;
//   }
// }
// console.log(mathUtil.PI);
// console.log(mathUtil.getDiameter(10));
// console.log(mathUtil.getCircum(10));
// console.log(mathUtil.getArea(10));

// example 2
// class User {
//   static userCount = 0;
//   constructor(username) {
//     this.username = username;
//     User.userCount++;
//   }
//   sayHello(){
//     console.log(`Hey! My username is: ${this.username}`);
//   }
//   static getUserCount(){
//     console.log(`There are ${User.userCount} users online`);
//   }
// }
// const user1 = new User("spongebob");
// const user2 = new User("patrick");
// const user3 = new User("Jacob");

// console.log(user1.username);
// user1.sayHello()
// User.getUserCount()

// Inheritance: allows a new class inherit properties and methods from an existing class (parent -> child) helps with code reuseability.

//inheritance helps us to use the DRY(dont repeat yourself) principle
// // example 1
// class Animal {
//   alive = true;

//   eat() {
//     console.log(`This ${this.name} can eat`);
//   }
//   sleep() {
//     console.log(`This ${this.name} can sleep`);
//   }
// }

// // each class can have its unique method
// class Rabbit extends Animal {
//   name = "rabbit";
//   run() {
//     console.log(`This ${this.name} is running`);
//   }
// }
// class Fish extends Animal {
//   name = "fish";
//   swim() {
//     console.log(`This ${this.name} is swimming`);
//   }
// }
// class Hawk extends Animal {
//   name = "hawk";
//   fly() {
//     console.log(`This ${this.name} is flying`);
//   }
// }
// // creating instance of an object
// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();

// console.log(rabbit.alive);
// rabbit.eat();
// rabbit.sleep();
// rabbit.run();

// Super: is used in classes to call the constructor or access the properties and methods of a parent (superclass)
// this - this object, super - the parent.

// example
// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   move(speed) {
//     console.log(`This ${this.name} moves at a speed of ${speed}mph`);
//   }
// }
// class Rabbit extends Animal {
//   constructor(name, age, runSpeed) {
//     super(name, age);
//     this.runSpeed = runSpeed;
//   }
//   run() {
//     console.log(`This ${this.name} can run`);
//     super.move(this.runSpeed);
//   }
// }
// class Fish extends Animal {
//   constructor(name, age, swimSpeed) {
//     super(name, age);
//     this.swimSpeed = swimSpeed;
//   }
//   swim() {
//     console.log(`This ${this.name} can swim`);
//     super.move(this.swimSpeed);
//   }
// }
// class Hawk extends Animal {
//   constructor(name, age, flySpeed) {
//     super(name, age);
//     this.flySpeed = flySpeed;
//   }
//   fly() {
//     console.log(`This ${this.name} can fly`);
//     super.move(this.flySpeed);
//   }
// }
// const rabbit = new Rabbit("rabbit", 1, 25);
// const fish = new Fish("fish", 2, 20);
// const hawk = new Hawk("hawk", 3, 50);

// hawk.fly();

// getter - special method that makes a property readable
// setter - special method that makes a property writeable

//validate and modify a value when reading/writing a property

// // example 1
// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
//   // outside of a constructor
//   set width(newWidth) {
//     if (newWidth > 0) {
//       this._width = newWidth;
//     } else {
//       console.log(`Width must be a positive number`);
//     }
//   }
//   set height(newHeight) {
//     if (newHeight > 0) {
//       this._height = newHeight;
//     } else {
//       console.log(`Height must be a positive number`);
//     }
//   }
//   get width() {
//     return `${this._width.toFixed(1)}cm`;
//   }
//   get height() {
//     return `${this._height.toFixed(1)}cm`;
//   }
//   get area() {
//     return `${(this._width * this._height).toFixed(1)}cm^2`;
//   }
// }

// const rectangle = new Rectangle(10, 5);

// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);

// example 2
// class Person {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }
//   set firstName(newFirstName) {
//     if (typeof newFirstName === "string" && newFirstName.length > 0) {
//       this._firstName = newFirstName;
//     } else {
//       console.log(`First name must be a non empty string`);
//     }
//   }
//   set lastName(newLastName) {
//     if (typeof newLastName === "string" && newLastName.length > 0) {
//       this._lastName = newLastName;
//     } else {
//       console.log(`Last name must be a non empty string`);
//     }
//   }
//   set age(newAge) {
//     if (typeof newAge === "number" && newAge >= 0) {
//       this._age = newAge;
//     } else {
//       console.log(`Age must be a non-negative number`);
//     }
//   }

//   get firstName() {
//     return this._firstName;
//   }
//   get lastName() {
//     return this._lastName;
//   }
//   get age(){
//     return this._age;
//   }
// }

// const person1 = new Person("Joshua", "Agbo", 10);

// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.age);

//Destructuring - extract values from arrays and objects, then assign them to variables in a convenient way.
// []- to perfom array destructuring.
// {}- to perfrom object destructuring

// example 1
// swap the value of two variables

// let a = 1;
// let b = 2;
// [a, b] = [b, a]
// console.log(a);
// console.log(b);

// example 2
// swap two elements in an array
// const colors = ["red", "green", "blue", "black", "white"];
// [colors[0], colors[4]] = [colors[4], colors[0]];
// console.log(colors);

// example 3
// assign array elements to variable
// const colors = ["red", "green", "blue", "black", "white"];
// const [firstColor, secondColor, thirdColor, ...extraColor] = colors;
// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColor);

// example 4
// extract values from object
// const person1 = {
//   firstName: "Spongebob",
//   lastName: "SquarePants",
//   age: 30,
//   job: "fry cook",
// };
// const person2 = {
//   firstName: "Patrick",
//   lastName: "Star",
//   age: 34,
// };

// // new variables in object destructuring must be same name with the key: in the object......
// const {firstName, lastName, age, job = 'unemployed'} = person2;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

// example 5
// destructure in function parameters
// function displayPersons({firstName, lastName, age, job}) {
//   console.log(`Full name: ${firstName} ${lastName}`);
//   console.log(`Age: ${age}`);
//   console.log(`Job: ${job}`);

// }

// const person1 = {
//   firstName: "Joshua",
//   lastName: "Agbo",
//   age: 25,
//   job: "student",
// };
// const person2 = {
//   firstName: "Peter",
//   lastName: "Emmanuel",
//   age: 23,
//   job: "student",
// };

// displayPersons(person1)

// Nested Objects - Objects inside of other objects. Allows you yo represent more complex data structures. Child Object is enclosed by a parent Object.
// Parent{Address{}, contactInfo{}}, ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

// // example 1
// const person = {
//   fullname: "Spongebob Squarepant",
//   age: 30,
//   isStudent: true,
//   hobbies: ["Karate", "Jellyfishing", "cooking"],
//   address: {
//     street: "124 Conch St.",
//     city: "Bikini Bottom",
//     country: "int. water",
//   },
// };
// // console.log(person.address);

// for (const property in person.address) {
//   console.log(person.address[property]);
// }

// example 2
// class Person {
//   constructor(name, age, ...address) {
//     this.name = name;
//     this.age = age;
//     this.address = new Address(...address);
//   }
// }

// class Address {
//   constructor(street, city, state) {
//     this.street = street;
//     this.city = city;
//     this.state = state;
//   }
// }

// const person1 = new Person('Josh', 23, 'Zone 4', 'Lugbe', 'Abuja')
// const person2 = new Person('Abu', 25, 'Kabuga', 'Kano', 'Kano')

//working with Array of Objects
// const fruits = [
//   { name: "apple", color: "red", calories: 95 },
//   { name: "orange", color: "orange", calories: 45 },
//   { name: "banana", color: "yellow", calories: 105 },
//   { name: "coconut", color: "white", calories: 159 },
//   { name: "pineapple", color: "yellow", calories: 37 },
// ];

// to add
// fruits.push({ name: "grapes", color: "purple", calories: 62 });
// // fruits.pop() // to remove
// // fruits.splice(1,2) // splice - removes at certain indexes
// // fruits.forEach(fruit => console.log(fruit.calories));// foreach to loop through the array and add a function to each element

// //................map().............. returns a new array
// const fruitsName = fruits.map((fruit) => fruit.name);
// const fruitsColor = fruits.map((fruit) => fruit.color);
// const fruitsCalories = fruits.map((fruit) => fruit.calories);

// // ...............filter()..............
// const yellowFruits = fruits.filter((fruit) => fruit.color === "yellow");
// const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
// const highCalFruits = fruits.filter((fruit) => fruit.calories >= 100);

// // ...............reduce()..............
// const maxFruits = fruits.reduce((max, fruit) =>
//   fruit.calories > max.calories ? fruit : max
// );
// const minFruits = fruits.reduce((min, fruit) =>
//   fruit.calories < min.calories ? fruit : min
// );
// console.log(minFruits);

// sort() - method used to sort elements of an array in place. Sorts elements as strings in lexicographic order, not alphabetical, lexicographic = (alphabet + symbol) as strings

// // example
// const fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
// fruits.sort();
// console.log(fruits);

// const numbers = [6, 1, 2, 4, 8, 9, 3, 5, 7, 10];
// numbers.sort(); //sorting it lexicopgrapically - treats it as string.
// numbers.sort((a, b) => b - a); // sort numerically

// sorting by giving property
// const people = [
//   { name: "spongebob", age: 30, gpa: 3.0 },
//   { name: "Patrick", age: 37, gpa: 3.5 },
//   { name: "squidbard", age: 52, gpa: 2.5 },
//   { name: "Sandy", age: 27, gpa: 4.0 },
// ];

// people.sort((a, b) => a.age - b.age); // also sort using, gpa as well
// people.sort((a, b) => a.name.localeCompare(b.name)); // to sort an object that contains a string (localCompare)
// console.log(people);

// how to shuffle and element of an array in JS

// const Cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
// Cards.sort(() => Math.random() - 0.5) // works but when arrays keep increasing it becomes inefficient
// using fisher-yates algorithm

// shuffle(Cards);
// console.log(Cards);

// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const random = Math.floor(Math.random() * (i + 1));

//     [array[i], array[random]] = [array[random], array[i]];
//   }
// }

// Dates objects - Objects that contain values that represents dates and time. these dates objects can be changed and formatted to suit our needs

// example
// date(year, month, day, hour, minute, second, ms)
// const date = new Date(2025, 6, 30, 6, 45, 5, 56);
// const date = new Date();
// // const date = new Date(); //using string

// // getting a particular date using date method....
// const year = date.getFullYear()
// const month = date.getMonth()
// const day = date.getDate()
// const hour = date.getHours()
// const minutes = date.getMinutes()
// const seconds = date.getSeconds()
// const dayOfWeek = date.getDay()
// console.log(year);
// console.log(month);
// console.log(day);
// console.log(hour);
// console.log(minutes);
// console.log(seconds);
// console.log(dayOfWeek);

// you can also set the date with the method
// const date = new Date()
// date.setFullYear(2025)
// date.setMonth(6)
// date.setHours(22)
// date.setMinutes(38)
// date.setSeconds(58)

// console.log(date);

// you can also compare dates as well
// const date1 = new Date("2023-12-31");
// const date2 = new Date("2024-01-01");

// if (date2 > date1) {
//   console.log(`Happy new year`);
// }

// Closure: a function defined inside another function, the inner function has access to the variables and scope of the outer function. Allows for private variables and state maintenance. used frequently in JS frameworks: React, vue, Angular

// example 1
// function outer() {
//   let message = `Hello`;
//   function inner() {
//     console.log(message);
//   }
//   inner();
// }

// outer();

// example 2
// a closure can maintain a state of a variable
// function createCounter() {
//   let count = 0;

//   function increment() {
//     count++;
//     console.log(`Count is increased to ${count}`);
//   }
//   //   can have more than one function
//   function getCount() {
//     return count;
//   }
//   function sayMyName(name) {
//     console.log(`Hello ${name}`);
//   }
//   return { increment, getCount, sayMyName };
// }
// const counter = createCounter();

// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.sayMyName('Jaybee');

// console.log(`Current count is ${counter.getCount()}`);

// you cant access the variables in closures
// counter.count = 0;
// console.log(count);
// console.log(counter.count)

// example 3
// function createGame() {
//   let score = 0;
//   function increaseScore(points) {
//     score += points;
//     console.log(`+${points}pts`);
//   }
//   function decreaseScore(points) {
//     score -= points;
//     console.log(`-${points}pts`);
//   }
//   function getScore() {
//     return score;
//   }
//   return {increaseScore, decreaseScore, getScore}
// }
// const game = createGame();

// game.increaseScore(10);
// game.increaseScore(10);
// game.increaseScore(10);
// game.decreaseScore(4);
// game.decreaseScore(4);

// console.log(`The final score is ${game.getScore()}pts`);

// SetTImeout() - function in JS that allows you to schedule the execution of a function amount an amount of time(millisecons). TImes are approximate(varies based on the workload of te JS runtime env.)
// setTimeout(useCallback, delay)

// ClearTimeout(timeID): can cancel a timeout before it triggers
// const timeoutId = setTimeout(() => {
//   window.alert(`Hello`);
// }, 3000);

// clearTimeout(timeoutId)

// // example 1
// let timeoutId;

// function startTimer() {
//   timeoutId = setTimeout(() => {
//     console.log(`Started`);
//   }, 3000);
// }
// function clearTimer() {
//     clearTimeout(timeoutId)
//     console.log(`Cleared`);

// }

// example - trying something
// function numberDisplay() {
//   for (let i = 0; i < 20; i++) {
//     setInterval(() => {
//       console.log(i);
//     }, 2000);
//   }
// }
// numberDisplay()

// // digital clock
// function showClock() {
//     const now = new Date()
//     let hours = now.getHours()
//     const meridiem = hours % 12 ? 'PM': 'AM';
//     hours = hours % 12 || 12;
//     hours = hours.toString().padStart(2, 0)
//     const minutes = now.getMinutes().toString().padStart(2, 0)
//     const seconds = now.getSeconds().toString().padStart(2, 0)
//     const timeString = `${hours}:${minutes}:${seconds}${meridiem}`
//     document.getElementById('clock').textContent = timeString;
// }

// showClock()
// setInterval(showClock, 1000)

// 1st August 2025

// ES6 Module: An external file that contains reusable code that can be imported into other Javascript files. write reusable code for many different apps. can contain variables, classes, functions .... and more Introduced as part of ECMAScript 2015 update.

// import { PI, getArea, getCircum, getVolume } from "./mathUtil.js";

// console.log(PI);

// const Circum = getCircum(10);
// const Area = getArea(10);
// const Volume = getVolume(10);

// console.log(`The circumference is: ${Circum.toFixed(2)}cm`);
// console.log(`The area is: ${Area.toFixed(2)}cm`);
// console.log(`The Volume is: ${Volume.toFixed(2)}cm`);

// 7:42
// Synchronous - Executes line by line consecutively in a sequential manner. Code that waits for an operation to complete

// example

// Asynchronous - Allows multiple operation to be performed concurrently without waiting. Doesn't block the execution flow and allows the program to continue. (I/O operations, network requests, fetching data) Handled with: callbacks, promises, Async/Await

// example 2

// using callback
// function func1(callback) {
//   setTimeout(() => {
//     console.log("task 1");
//     callback();
//   }, 3000);
// }
// function func2() {
//   console.log("task 2 ");
//   console.log("task 3 ");
//   console.log("task 4 ");
// }
// func1(func2);

// 2nd August 2025

// Error - An object that is created to represent a problem that occurs. Occur often with user input or establishing a connection.

// console.leg("Hello"); //(.leg) uncaught - type errors (trying to access something within an object that doesnt exist)

// prematurely exit the program, it never finish it executing
// this errors automatically stops the flow off our program

// console.log(x); //(x) uncaught - reference error (x is not defined)

// errors can be generated for all sorts of issues
// NETWROK ERRORS
// PROMISE REJECTION
// SECURITY ERRORS

//  when we encounter some of this things an error object is generated and it interrupts our program

// solution to handle them..

// try{} - encloses code that might potentially cause an error
// catch {} - catch and handle any thrown errors from try {}
// finallt {} - {optional} Always executes. used mostly for clean up. ex. close files, close connections, release resources.

// example 1
// try {
//   console.log(x);
//   // NETWROK ERRORS
//   // PROMISE REJECTION
//   // SECURITY ERRORS
// } catch (error) {
//   console.error(error);
// } finally {
//   // close files,
//   // close connections,
//   // release resources.
//   console.log("This always executes");
// }
// // any code that might be consider dangerous and can cause an error, then surrounds it in a try block and then catch it.

// console.log("You have reach the end");

// example 2

try {
  const dividend = Number(prompt("Enter a dividend: "));
  const divisor = Number(prompt("Enter a divisor: "));

  if (divisor == 0) {
    throw new Error("You can divide by zero");
  }
if(isNaN(dividend) || isNaN(divisor)){
  throw new Error("Values must be a number");
  
}
  const result = dividend / divisor;
  console.log(result);
} catch (error) {
  console.error(error);
}

console.log("You have reached the end");
