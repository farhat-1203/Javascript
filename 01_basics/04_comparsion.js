// console.log(2>1);        // true
// console.log(2>=1);       // true
// console.log(2<1);        // false
// console.log(2!=1);       // true

console.log("2">1);
console.log("02">1);

console.log(null<0);        // The reason is that an equality check (==) and comparisons (><)(>=<=) works differently
console.log(null==0);       // Comparisons convert null to a number, treating it as 0
console.log(null>=0);       // That's why (1) null<0 is false and (3) null>=0 is true
console.log(undefined==0);  // undefined always returns false in every case

// strict check (===)
console.log("2"===2);