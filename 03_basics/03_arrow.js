const user = {
    username: "Farhat",
    price: "999",
    welcomeMessage: function(username="New user"){
        console.log(`Hello ${this.username}, welcome to our website`);
        console.log(this);
    }
}


// user.welcomeMessage()
// user.username= "Atif"
// user.welcomeMessage()

// console.log(this);           // {}


function coffee(){
    let username = "Farhat"
    console.log(this.username);         // undefined
    console.log(this);                  // global object
}
coffee()                // undefined



// we can access 'this' in context of an object
// but the same would return undefined, if used within a function


const chai = function(){
    let username = "Farhat"
    console.log(this.username);              // undefined
    console.log(this);                       // global object
}
chai()                  // undefined

const drink = () => {
    let username = "Farhat"
    console.log(this.username);     // undefined
    console.log(this);              // {} => empty object
}
drink()                 // undefined


// () => {}         ARROW FUNCTION

// explicit return  => {return  , }
const addtwoNumbers = (number1,number2) => {
    return number1+number2
} 
console.log(addtwoNumbers(2,9));            // 11


// implicit return   => ( , )
const addTwoNumbers = (number1,number2) => (number1+number2)
console.log(addTwoNumbers(2,9));            // 11


// implicitly taking object as an argument, we use ({})
const myObject = (number1,number2) => ({username:"Farhat"})
console.log(myObject(2,4));                 // { username: 'Farhat' }


const myArray = [100,200,300,400,500]
myArray.forEach(() => {})