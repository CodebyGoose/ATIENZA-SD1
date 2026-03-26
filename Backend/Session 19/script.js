//console.log("Hello World!");

// [Section] Functions with Parameters

/*
SYNTAX:

function functionName(params1, params2, ...)
//code block


*/

function greeting() {
    let userInput = prompt("Please enter your name:");

    console.log("Hello, " + userInput + "!");
}

// greeting();
// Function with parameters
// Name is our parameter, and we can use it in the function body
// parameter acts as a variable that holds the value passed to the function when it is called.

function sayHello(name) {
    console.log("Hello from function with parameters, " + name + "!");
}
// say hello function is called with the argument "REYNA", which will be passed to the parameter 'name' in the function definition. The function will then print a greeting message that includes the name provided as an argument.
sayHello("REYNA");


//  Multiple parameters
function introduce(firstname, lastname, age) {
    console.log(`Hello, ${firstname} ${lastname}! You are ${age} years old.`);
}
introduce("REYNA", "Garcia", 25);


// Function and return statement
function addNumbers(num1, num2) {
    return num1 + num2;
}
let result = addNumbers(5, 10);
console.log(result);


// Default parameter
// If the second argument is not provided, quantity becomes 1.
function order(item, quantity = 1) {
    console.log(`Order placed: ${quantity} ${item}(s)`);
}
order("Burger", 2);
order("Fries");


// Rest parameter (...numbers)
// This lets a function accept many arguments as one array.
function getTotal(...numbers) {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    return total;
}
console.log("Total:", getTotal(10, 20, 30, 40));


// Parameter as an object
// Useful when you have related data grouped together.
function printStudentInfo(student) {
    console.log(`Student: ${student.name}, Age: ${student.age}, Course: ${student.course}`);
}
const student1 = {
    name: "Reyna",
    age: 25,
    course: "BSIT"
};
printStudentInfo(student1);


// Parameter as a function (callback)
function processNumber(number, callback) {
    const output = callback(number);
    console.log(`Processed value: ${output}`);
}

function square(value) {
    return value * value;
}

processNumber(6, square);


// Practice section
// Try changing the arguments below and run again.
function makeUsername(firstName, birthYear) {
    return firstName.toLowerCase() + birthYear;
}

console.log("Generated username:", makeUsername("Reyna", 2001));
