// JavaScript code goes here
//console.log("Hello, World!");

// [SESSION JAVASCRIPT OBJECTS]
// Imitates real world descriptions and real-world objects using JavaScript objects

// Object Literal Notation

/*let arr = [1, 2, 3, 4, 5]; // Array

let obj = {
    name : "John Doe",
    age : 30,
}

console.log(typeof arr)
console.log(typeof obj) 

let person = {
    completeName : "John J. Doe",
    age : 30,
    height : 180,
    weight : 75,
}

console.log(person);


//DOT Notation
console.log(person.completeName);
console.log(person.age);

console.log(`Hi, my name is ${person.completeName} and I am ${person.age} years old.`);

console.log(person[`completeName`]);

// Updating a value via dot notation
person.completeName = "Jane J. Doe";
console.log(person);


//adding a property inside an object
person.email = "jdoe@example.com";
console.log(person);


// Class & Objects
// to add properties in a class use "this" keyword
function Animal (name, breed, kind, color){
    //constructor
        this.name = name;
        this.breed = breed;
        this.kind = kind;
        this.color = color;
        this.makesound = function() {
            if(this.kind === "Dog") {
                console.log("Woof! Woof!");
            } else if(this.kind === "Cat") {
                console.log("Meow! Meow!");
            }
            }
        }

// Instance -> copy/duplicate of a function class
let dog1 = new Animal("Cooper", "Huskal", "Dog", "White Brown");

console.log(dog1);

console.log(dog1.name);
dog1.makesound(dog1);

let cat = new Animal("Whiskers", "Siamese", "Cat", "Cream");

console.log(cat);
console.log(cat.name);
cat.makesound();
*/




// [SECTION] Pokemon

//  SECTION POKEMON OBJECT

function Pokemon(name, level, health, mana) {
    this.name = name;
    this.level = level;
    this.health = health * level;
    this.mana = mana;
    this.maxHealth = health * level;
    this.maxMana = 100;


    this.tacle = function(target) {
        let damage = 20;
        let actualDamage = Math.min(damage, target.health);
        console.log(`${this.name} uses Tackle on ${target.name}!`);
        target.health -= actualDamage;
        console.log(`${target.name} took ${actualDamage} damage. Health: ${target.health}/${target.maxHealth}`);
    }

    this.skill = function(target) {
        if(this.name == "Pikachu") {
            if(this.mana < 50) {
                console.log(`${this.name} does not have enough mana. Mana: ${this.mana}/50`);
            } else {
            let damage = 150;
            let actualDamage = Math.min(damage, target.health);
            console.log(`${this.name} used THUNDERBOLT`);
            target.health -= actualDamage;
            this.mana -= 50;
            console.log(`${target.name} took ${actualDamage} damage. Health: ${target.health}/${target.maxHealth}`);
            console.log(`${this.name} mana: ${this.mana}/${this.maxMana}`);
            }
        } else if (this.name == "Charmander") {
            if(this.mana < 50) {
                console.log(`${this.name} does not have enough mana. Mana: ${this.mana}/50`);
            } else {
                let damage = 150;
                let actualDamage = Math.min(damage, target.health);
                console.log(`${this.name} used FLAMETHROWER`);
                target.health -= actualDamage;
                this.mana -= 50;
                console.log(`${target.name} took ${actualDamage} damage. Health: ${target.health}/${target.maxHealth}`);
                console.log(`${this.name} mana: ${this.mana}/${this.maxMana}`);
            }
        }
    }

        this.heal = function() {
        let healAmount = 100;
            let actualHeal = Math.min(healAmount, this.maxHealth - this.health);

        if (actualHeal === 0) {
                console.log(`${this.name} used a potion, but is already at full health. Health: ${this.health}/${this.maxHealth}`);
        } else {
            this.health += actualHeal;
                console.log(`${this.name} used a potion and restored ${actualHeal} health. Health: ${this.health}/${this.maxHealth}`);
        }
    }

// MANA RESTORE FUNCTION
    this.manaRestore = function() {
        let manaAmount = 50;
        if (this.mana + manaAmount > this.maxMana) {
            this.mana = this.maxMana;
            console.log(`${this.name} is fully restored! Mana: ${this.mana}/${this.maxMana}`);
        } else {
            this.mana += manaAmount;
            console.log(`${this.name} restored ${manaAmount} mana points! Mana: ${this.mana}/${this.maxMana}`);
        }
    }
}



console.log("Welcome to the Pokemon Battle Simulator!");
let pikachu = new Pokemon("Pikachu", 5, 100, 10);
let charmander = new Pokemon("Charmander", 5, 100, 10);

pikachu.tacle(charmander);
pikachu.tacle(charmander);
charmander.tacle(pikachu);

charmander.skill(pikachu);
pikachu.skill(charmander);

pikachu.heal();
pikachu.heal();
pikachu.heal();

pikachu.manaRestore();

pikachu.skill(charmander);
pikachu.tacle(charmander);
pikachu.skill(charmander);
charmander.tacle(pikachu);
charmander.skill(pikachu);

charmander.manaRestore();

charmander.skill(pikachu);

pikachu.heal();

charmander.heal();
