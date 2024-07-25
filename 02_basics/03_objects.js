// myArray = ["f","a"]      defining
// myArray[0]               accessing


// singleton

// object literals 
// Object.create      // constructor   

// creating an object

const jsUser = {
    name : "Farhat Momin",
    age : 19,
    location : "Mumbai",
    "my profession" : "student",
    email : "farhatmomin@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

// accessing the element of an object
console.log(jsUser.age);        // method 1         // 19
console.log(jsUser["age"]);     // method 2         // 19
// console.log(jsUser.my profession);       // cannot be accessed 
console.log(jsUser["my profession"]);               // student 


// declaring a symbol
const mySymbol = Symbol("key1")

// taking symbol as a key in object and accessing it 
// [mySymbol] : "key1"

const jsUserTwo = {
    name : "Farhat Momin",
    age : 19,
    location : "Mumbai",
    [mySymbol] : "key1",
    "my profession" : "student",
    email : "farhatmomin@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

console.log(jsUser.mySymbol);               // key1
console.log(typeof jsUser.mySymbol);        // data type: string if mySymbol : "key1"
console.log(typeof jsUser[mySymbol]);       // data type: string ... of the value "key1"


// changing a value of any element 
jsUser.email = "fm@gmail.com"

// Object.freeze(jsUser)               // freezes the entire object, that means none of the value can be changed now
jsUser.email = "farhatmomin@yahoo.com"    // this will propogate no changes 
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello World");
}

jsUser.greetingTwo = function(){
    console.log(`Hello ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());