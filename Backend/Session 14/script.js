// This is a simple JavaScript file that will log "Hello World!" to the console when executed.
// console.log() is a built-in function in JavaScript that outputs a message to the web console.
console.log("Hello World!");

// To use comment we need to use double forward slash (//) for single-line comments or /* */ for multi-line comments.
// We can also use /* */ for multi-line comments.
// This is a single-line comment again.
/* This is a multi-line comment again. */


// SECTION 1: Variables and Data Types

// In JavaScript, we can declare variables using var, let, or const.
// var is function-scoped and can be re-declared and updated.
// let is block-scoped and can be updated but not re-declared.
// const is block-scoped and cannot be updated or re-declared.
var name = "John"; // String data type
let age = 30; // Number data type
const isStudent = true; // Boolean data type
console.log(name, age, isStudent);

// SECTION Data Types

// JavaScript has several data types including:
// - String: A sequence of characters enclosed in single or double quotes.
// - Number: A numeric value, which can be an integer or a floating-point number.
// - Boolean: A logical value that can be either true or false.
// - Undefined: A variable that has not been assigned a value.
// - Null: A special value that represents the absence of a value.
// We can check the type of a variable using typeof operator.

/*  let variablename = value; */
let height = 150;
console.log (height); // Output: number

// loose type javascript is a loosely typed language, which means that we can change the type of a variable after it has been declared. For example:

console.log(height);

console. log  (  height                   )

console


.


log







(height)


// synchronous pl -> js is a synchronous programming language, which means that it executes code line by line. However, we can use asynchronous programming techniques such as callbacks, promises, and async/await to handle asynchronous operations in JavaScript.



let gwa = 1.75;
console.log(gwa);

//  character data type

let firstName = 'John';
console.log(firstName);

// typeof to check the data type of a variable
console.log(typeof firstName);
console.log(typeof gwa);
console.log(typeof height);


// Text Casing in JS
// camel casing
// snake casing
// pascal casing
// kebab casing
// kebab kebab casing
// pascal kebab casing
let text = "hello world";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.charAt(0));
console.log(text.indexOf('o'));
console.log(text.lastIndexOf('o'));
console.log(text.replace('world', 'universe'));
console.log(text.split(' '));
console.log(text.trim());
console.log(text.slice(0, 5));
console.log(text.substring(0, 5));
console.log(text.substr(0, 5));
console.log(text.length);
console.log(text.concat(' ', 'world'));
console.log(text.repeat(3));
console.log(text.includes('world'));
console.log(text.startsWith('hello'));
console.log(text.endsWith('world'));
console.log(text.match(/o/g));
console.log(text.search('o'));
console.log(text.replace(/o/g, 'a'));
console.log(text.replace(/o/g, 'a', 1));


// boolean data type
let isRaining = true;
let isSunny = false;
let Hasexpired = null;
console.log(isSunny);
console.log(typeof isSunny);
console.log(isRaining);
console.log(typeof isRaining);
console.log(Hasexpired);
console.log(typeof Hasexpired);



// concatenation
let firstName1 = "John";
let lastName1 = "Doe";
let province = "Pampanga";
let fullName = firstName1 + " " + lastName1;
console.log(fullName);
console.log(province);
console.log(fullName + " " + province);
console.log("My average Grade is " + gwa);
console.log("My average Grade is " + gwa + " and I live in " + province);
console.log("My average Grade is " + gwa + " and I live in " + province + " and I am " + age + " years old.");
console.log("My average Grade is " + gwa + " and I live in " + province + " and I am " + age + " years old. I am " + isStudent + " and I am " + isRaining + " and I am " + isSunny + " and I am " + Hasexpired + ".");



// Type-coercion
// Type coercion is the automatic or implicit conversion of values from one data type to another. In JavaScript, type coercion can occur in various situations, such as when using the + operator with different data types.

// Concatenation of a string and a number or other data types will result in a string. For example:
let result1 = "The answer is " + 42;
console.log(result1); // Output: "The answer is 42"


// 