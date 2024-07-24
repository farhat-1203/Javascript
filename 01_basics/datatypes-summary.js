// Primitive data types
// 7 types: String, Number, Boolean, null undefined, Symbol, BigInt

const score = 100       // typeof: number
const scoreValue = 100.4    // typeof: number
const isLoggedIn = true     // typeof: boolean
const outsideTemp = null    // typeof: object
let userEmail;   // (let userEmail = undefined)         // typeof: undefined
const id = Symbol("124")    // typeof: symbol
const anotherId = Symbol("124")      // typeof: symbol

console.log(id == anotherId);      // false

const bigNumber = 74625637587598273n    // bigint
 


// Reference data types
// 3 types: Array, Objects, Functions

// Arrays
const superHeroes = ["Captain America", "Hulk", "Ironman", "Thor"]     // typeof: object 


// Object
let myObj =                   // typeof: object
{
   name: "Farhat Momin",
   age: 19,                                     // Anything enclosed between curly braces are termed as Object
   profession: "student",                       // it can be of any data type
}   


// Function
const myFunction = function(){                  // typeof: (Object) function
    console.log("Hello World");
}

console.log(typeof myFunction);   // function
