const userEmail = true
if (userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}


// FALSY Values:
// false, 0, -0, 0n, "", null, undefined, NaN

// TRUTHY Values:
// true, 1, "0", "false", " ", [], {}, function(){}


const emptyArray = []

if (emptyArray.length === 0) {
    console.log("Array is empty");
}


const emptyObject = {}

if (Object.keys(emptyObject).length === 0){          // Object.keys returns an array of keys present in the object()
    console.log("Object is empty");
} 


// Nullish Coalescing Operator (??): null undefined

let val_1;
// val_1 =  5 ?? 10                 // 5 --> first value is assigned
// val_1 = null ?? 10               // 10 --> value other than null (second value)
// val_1 = undefined ?? 10          // undefined 
// val_1 = null ?? 10 ?? 20         // 10 --> first value which is after null, is assigned

console.log(val_1);             


// Ternary Operator:
// condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("greater than 80") : console.log("less than 80");                   // greater than 80

// if (iceTeaPrice >= 80){
//     console.log("greater than 80");
// }                                                // greater than 80
// else{
//     console.log("less than 80");
// }

