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
function sum(...numbers) {
    let results = 0

    for(let number of numbers){
        results += number;
    }
    return results;
}
const total = sum(1,2,3,4,5)
console.log(total);
