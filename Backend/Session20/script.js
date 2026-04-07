console.log("JS Array Mutator vs Non-Mutator Methods");

// SECTION Array
//An array is also a storage for multiple values. It is a data structure that can hold a collection of items.
//The best practice is that values/elements stored in an array should be of the same data type.

let pokemon = ["Pikachu", "Bulbasaur", "Charmander", "Squirtle"];
console.log(pokemon);

console.log(pokemon[0]); // Accessing the first element of the array
console.log(pokemon[1]);
console.log(pokemon[2]);
console.log(pokemon[3]);
console.log(pokemon[4]); // Accessing an index that does not exist returns undefined

// Mutator Methods
// Mutator methods are methods that change the original array. They modify the array in place and do not return a new array.

console.log(`My favorite pokemon is ${pokemon[0]}.`); // Accessing the first element of the array
pokemon[0] = "Eevee";
console.log(`My favorite pokemon is ${pokemon[0]}.`); // Accessing the first element of the array after modification
//Accessing an index that is not existing will create a new element in the array with the value of undefined
console.log(pokemon[5]);

// Array Mutation
// Modifying an array by directly changing its elements is called array mutation. It changes the original array and does not return a new array.
pokemon[5] = "Jigglypuff";
console.log(pokemon);

pokemon[10] = "Meowth"; // Adds a new element to the end of the array
console.log(pokemon.length) // The length of the array is now 11, even though we only have 6 elements. The other elements are undefined.
console.log[pokemon.length] = "Snorlax"; // This does not change the length of the array, it just assigns a value to the length property, which is not a valid operation. The length property is read-only and cannot be modified directly.
console.log(pokemon);
console.log(pokemon.length); // The length of the array is still 11, as the previous operation did not change it.


