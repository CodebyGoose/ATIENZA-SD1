// Discussion Topic List:

// 1. Arithmetic Operators
// Addition Operator (+)
// Subtraction Operator (-)
// Multiplication Operator (*)
// Division Operator (/)


// 2. Assignment Operators
// Basic Assignment Operator (=)
// Addition Assignment Operator (+=)
// Subtraction Assignment Operator (-=)
// Multiple Operators and Parentheses

// 3. Increment and Decrement
// Increment Operator (++)
// Decrement Operator (--)

// Type Coercion
// 4. Comparison Operators
// Equality Operator (==)
// Inequality Operator (!=)
// Strict Equality Operator (===)
// Strict Inequality Operator (!==)

// 5. Relational Operators
// Greater Than Operator (>)
// Greater Than or Equal To Operator (>=)
// Less Than Operator (<)
// Less Than or Equal To Operator (<=)

// 6. Logical Operators
// Logical AND Operator (&&)
// Logical OR Operator (||)
// Logical NOT Operator (!)

// [Section] Arithmetic Operators
let num1 = 10;
let num2 = 2;
let num3 = 3;

// Addition Operator (+)
let sum = num1 + num2;
console.log("Sum of num1 and num2 is: " + sum); // Output: Sum of num1 and num2 is: 12

// Subtraction Operator (-)
let diff = num1 - num2;
console.log("Difference: " + diff);

// Multiplication Operator (*)
let product = num1 * num2;
console.log("Product: " + product);

// Division Operator (/)
let quo = num1 / num2;
console.log("Quotient: " + quo);

// Reminder Operator (%)*)
let modulo = num1 % num3;
console.log("Modulo: " + modulo);

// [Section] Assignment Operators
let num4 = 20;
let num5 = 8;

num4 += num4;
console.log("+=: " + num4);

num4 += num5;
console.log("+=: " + num4);

// [Section] Increment and Decrement
let days = 5;
console.log("Original Value: " + days);

++days;
console.log("Pre Increment 1: " + days);

++days;
console.log("Pre Increment 2: " + days);

// Post
let month = 4;
console.log("Original Value: " + month);

month++;
console.log("Post Increment 1: " + month);

month++;
console.log("Post Increment 2: " + month);

let days2 = 5;
console.log("Original Value: " + days2);

days2--;
console.log("Pre Decrement 1: " + days2);

days2--;
console.log("Pre Decrement 2: " + days2);

let months2 = 4;
console.log("Original Value: " + months2);

months2--;
console.log("Post Decrement 1: " + months2);

months2--;
console.log("Post Decrement 2: " + months2);

// [Section] Comparison Operators
//Equality Operator (==)
let num6 = 10;
let num7 = 12;
let num8 = "10";
let equality = num6 == num7;
console.log("Equality Operator: " + equality);

let equality2 = num6 == num8;
console.log("Equality Operator: " + equality2);

// Strict Equality Operator (===)
let strictequality = num6 === num7;
console.log("Strict Equality Operator: " + strictequality);

let strictequality2 = num6 === num8;
console.log("Strict Equality Operator: " + strictequality2);

// Not Equal Operator (!=)
let notEqual = num6 != num7;
console.log("Not Equal Operator: " + notEqual);

let notEqual2 = num6 != num8;
console.log("Not Equal Operator: " + notEqual2);

// Strict Not Equal Operator (!==)
let strictNotEqual = num6 !== num7;
console.log("Strict Not Equal Operator: " + strictNotEqual);

let strictNotEqual2 = num6 !== num8;
console.log("Strict Not Equal Operator: " + strictNotEqual2);


// [Section] Relational Operators
let num9 = 25;
let num10 = 15;
console.log("GT: ", num9 > num10);
console.log("LT: ", num9 < num10);
console.log("GTE: ", num9 >= num10);
console.log("LTE: ", num9 <= num10);

// [Section] Logical Operators
let isLegalAge = true, isMarried = false, isVoter = true;
console.log("Logical AND: ", isLegalAge && isMarried && isVoter);
console.log("Logical OR: ", isLegalAge || isMarried || isVoter);
console.log("Logical NOT: ", !isMarried);

// [Section] Large Scale Data Types

// Array - can store multiple values in a single variable
let array = [10, 20, 30];
let names = ["John", "Jane", "Doe"];
console.log("Array: ", array);
console.log("Names: ", names);

let mixedArray = [10, "Hello", true, null];
console.log("Mixed Array: ", mixedArray);

// Object - can store multiple key-value pairs in a single variable
let user = {
    name: "John Loyd",
    gradeLevel: 3,
    isEnrolled: true
}

console.log("User Object: ", user);

// [Section] Alert vs Prompt
alert("This is an alert message!");
console.log("Hello");

let completeName = prompt("Please enter your complete name: ");
console.log("Hello, " + completeName);

let input1 = parseInt(prompt("Enter a number: "));
let input2 = parseInt(prompt("Enter another number: "));

let sum3 = input1 + input2;
console.log("Sum From Prompt: " + sum3);