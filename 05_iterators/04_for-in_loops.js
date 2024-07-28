
// for in loop:
// mainly iteartable to objects 
// for arrays => arrayName[key]


// Objects

const myObject = {
    ".js": "Javascript",
    ".cpp": "C++",
    ".py": "Python",
    ".java": "Java"
}


// applying for in loop to objects:

for (const key in myObject) {
    // console.log(`${key} is the extension for ${myObject[key]}`);
}



// Arrays:

const programming = ["js","Python", "Java", "R"]

// applying for in loop to arrays:
for (const key in programming) {
        // console.log(programming[key]);   
}


// Maps

const map = new Map()
// inserting elements to map
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("UK", "England")
map.set("UAE", "United Arab Emirates")
map.set("UAE", "United Arab Emirates")


// for in loop is not applicable to maps => no output
for (const key in map) {
   console.log(key);
}

// map is not iteratable

