// for of loop: 
// only iteratable in case of an array and map


// applying for of loop on arrays:
const myArray = [1,2,3,4,5]

for (const i of myArray) {
    console.log(i);
}


const greetings ="Hello World!"

for (const greet of greetings){
    console.log(`Each character is ${greet}`);
}


// Maps
// applying for of loop on maps:

const map = new Map()
// inserting elements to map
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("UK", "England")
map.set("UAE", "United Arab Emirates")
map.set("UAE", "United Arab Emirates")

// console.log(map);

// applying for of loop on maps:

for (const [key,value] of map) {
    // console.log(key, ":", value);
}



// applying for of loop on objects doesn't give any output
// since for of loop is not iteratable on objects

const myObject ={
    IN: "India",
    US: "United States of America",
    UK: "England"
}

for (const obj of myObject) {
    console.log(obj);           // Object is not iteratable
}

