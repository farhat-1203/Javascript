const score = 200
console.log(score);             // 200

const balance = new Number(91.80)
console.log(balance);           // [Number:192]
console.log(balance.toString());    // 192
console.log(typeof balance.toString());     // string
console.log(typeof balance.toString().length);     // 3
console.log(balance.toFixed(1));     // 91.8        // rounds off the number to a certain digit

const otherNumber = 89.7068
console.log(otherNumber.toPrecision(2));        // 90

const hundreds = 1000000
console.log(hundreds.toLocaleString("en-IN"));        // 10,00,000 

// ******* Math *******

console.log(Math);
console.log(Math.abs(-4));          // converts negative value to a positive value   // 4
console.log(Math.round(4.3));       // 4
console.log(Math.ceil(4.5));       // 5
console.log(Math.min(1,3,5,7,9));       // 1

console.log(Math.random());       // always gives between 0 and 1 
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min+1))+min);
