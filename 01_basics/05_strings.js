const name = "Farhat Momin"
const message = " welcome to javascript" 

// console.log(name + repoCount + " happy coding");

console.log(`Hey ${name},${message}, keep coding`);



// Some methods of String
const gameName = new String("Farhat Momin")
console.log(gameName[1]);
console.log(gameName.__proto__);

console.log(gameName.length);           // length of a string   i.e 6
console.log(gameName.toUpperCase());    // caps on
// console.log(gameName);    // Er. FM       // original value is not changed
console.log(gameName.charAt(2));        // returns the char at the specified position(index)
console.log(gameName.indexOf("r"));     // returns the index no. of the specified char
const newString = gameName.substring(0,3)      // string slicing -- returns a part of a string 
console.log(newString);                        // Far
// though we can provide negative indices in substrings as well, but the result isn't as expected; 
// it converts the respective index to 0 and hence return the entire string


const anotherString = gameName.slice(0,3)      
console.log(anotherString);                    // Far

const anotherString1 = gameName.slice(-5)      // slicing actually works with negative indices
console.log(anotherString1);                   // Momin

const newStringOne = "  Farhat  Momin "
console.log(newStringOne.trim());              // Farhat Momin

const url = "https://www.fm.com/farhat%20momin"
console.log(url.replace("%20", "-"));          // https://www.fm.com/farhat-momin

console.log(url.includes("farhat"));           // true

console.log(gameName.split(" "));              // split returns an array, based on the specified separator