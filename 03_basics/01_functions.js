

function sayMyName(){
    console.log("F");
    console.log("A");
    console.log("R");
    console.log("H");
    console.log("A");
    console.log("T");
}

// sayMyName()

// function addtwoNumbers(number1,number2){
//      console.log(number1+number2);
// }

// const result = addtwoNumbers(3,2)                // 5
// console.log(result);                             // undefined

function addtwoNumbers(number1,number2){
    return number1+number2                          //  let result = number1+number2
                                                    // return result
}

const result = addtwoNumbers(3,2)       
console.log(result);                                // 5


function loginUserMessage(userName= "A new user"){          // (default value=" ")

    if (userName === undefined){                    // if (!userName){}
        console.log("Please enter the username");
        return
    }
    return `${userName} just logged in`
}

// console.log(loginUserMessage("Farhat"));
console.log(loginUserMessage());



// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(2));             // 2

function calculateCartPrice(...num1){           // we use ... rest operator in function for passing multiple values
    return num1         
}

console.log(calculateCartPrice(200,400,600));     // [200,400,600]


function calculateCartPrice(val1,val2,...num1){           // we use ... rest operator in function for passing multiple values
    return num1         
}

console.log(calculateCartPrice(200,400,600));     // [600]


// declaring an object
const myObj = {
    username: "farhat_1203",
    expertise: "Data Science"
}

// defining a function that accepts that object 
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and he/she is excel in ${anyObject.expertise}`);
}

// handleObject(user)

// passing object as an argument in function
handleObject({
    username: "farhatmomin_005",
    expertise: "Data Science"
})


// passing an array as argument

// delcaring an array
const myArray = [200,400,600,800,1000]

// defining a function
function handleArray(anyArray){
    return anyArray[1]
}

// console.log(handleArray(myArray));

const newArray = handleArray([100,200,300,400])
console.log(newArray);