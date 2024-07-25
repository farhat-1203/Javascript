const marvelHeroes = ["Thor","Ironman","Hulk"]
const dcHeroes = ["Superman","Flash","Batman"]

// push() returns the existing array by making changes in it 
marvelHeroes.push(dcHeroes)     // inserts the specified array as a new element
console.log(marvelHeroes);      // nested array: treats the newly inserted array as a whole element
console.log(marvelHeroes[3]);   // [ 'Superman', 'Flash', 'Batman' ]
console.log(marvelHeroes[3][1]);   // accessing the value from the new array   // Flash

// concat() returns a new array, by merging the two arrays
const allHeroes = marvelHeroes.concat(dcHeroes)       
console.log(allHeroes);                 // [ 'Thor', 'Ironman', 'Hulk', 'Superman', 'Flash', 'Batman' ]

const allNewHeroes = [...marvelHeroes,...dcHeroes]  
console.log(allNewHeroes);              // [ 'Thor', 'Ironman', 'Hulk', 'Superman', 'Flash', 'Batman' ]

// concat() and spread(...,...,...) both returns the same output 
// but concat has a limitation of pushing only one array, whereas with ...,... we can add as many as we want

const anotherArray =  [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const useableAnotherArray =  anotherArray.flat(3)       // merges all the arrays into a single array   // const useableAnotherArray =  anotherArray.flat(Infinity)
console.log(useableAnotherArray);                       // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

console.log(Array.isArray("Farhat"))        // false
console.log(Array.from("Farhat"))           // converts to an array   [ 'F', 'a', 'r', 'h', 'a', 't' ]
console.log(Array.from({name: "Farhat"}));         // returns an empty array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));       // converts the set of elements (variables, arrays, objects) to a new array