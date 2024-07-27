// // if

// const isUserLoggedIn = true

// const temp = 41

// if (temp === "41"){
//     console.log("less than 50, toooo hotttt");
// }
// else{
//     console.log("greater than 50");
// }
// console.log("executed");

// //  <,>,<=,>=,==,!=, === 


// const score = 200
// if (score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }
// // console.log(`User power: ${power}`);        // this line will not be executed, since the variable 'power' has a local scope


// Short Hand Notation
// if (balance > 500) console.log("executed"),console.log("executed second time");


// const balance = 1000
// if (balance < 500){
//     console.log("your balance is less than 500");
// }
// else if(balance < 750) {
//     console.log("less than 750");
// }
// else if (balance < 900){
//     console.log("less than 900");
// }
// else {
//     console.log("final");
// }

const UserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromYahoo = true

// if(UserLoggedIn == true && debitCard == true){
//     console.log("Allow to buy courses");
// }

if (loggedInFromGoogle==true || loggedInFromYahoo==true){
    ;console.log("Yes, you can buy");
}
