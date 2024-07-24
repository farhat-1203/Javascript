
// Converting into Number
let score = "Farhat"
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof (valueInNumber));
console.log(valueInNumber);


// "33" => 33
// 33abc => NaN
// true => 1; false => 0

// Converting into Boolean values
let isLoggedIn = "Farhat"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);

// 1 => true; 0=> false
// "" => false
// "Farhat" => true

// Number to String
let age = 19
console.log(typeof age);
let convertToString = String(age)
console.log(convertToString);
console.log(typeof convertToString);



//  **********Operations**********
let value = 19
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/2);
console.log(2%2);

let str1 = "Hello World"
let str2 = ", Keep coding"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 9);   // 19
console.log(1 + "9");   // 19
console.log("1" + 9 + 9);   // 199
console.log(1 + 9 + "9");   // 109
console.log((3+4)*5%3);
console.log(true);   // true
console.log(+true);   // 1
console.log(+"");   // 1

let num1, num2, num3
num1=num2=num3=2+2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);