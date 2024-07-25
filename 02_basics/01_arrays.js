const myArray =  [0,1,2,3,4,5,true,"Farhat"]        // declaring an array
const myArray2 =  new Array(0,1,2,3,4,5,true,"Farhat")

console.log(myArray[2]);    // accessing the element of an array
console.log(myArray2[2]);

// Some methods of Array
myArray.push(6)     // adds the element upto the last index
myArray.pop()       // deletes the last element

myArray.unshift(9)  // adds the element to the 1st index
myArray.shift()


console.log(myArray.includes(9));   // -1
console.log(myArray.indexOf(10));   // -1

const newArray = myArray.join()
console.log(newArray);   // typeof (string)
console.log(myArray);

console.log("A", myArray);          // original array     A [ 0, 1, 2, 3, 4, 5, true, 'Farhat' ]

const myNewArray1 = myArray.slice(1,4)   
console.log(myNewArray1);           // [ 1, 2, 3 ]
console.log("B", myArray);          // array after slicing    B [ 0, 1, 2, 3, 4, 5, true, 'Farhat' ]

const myNewArray2 =  myArray.splice(1,4)
console.log(myNewArray2);           // [ 1, 2, 3, 4 ]
console.log("C",myArray);           // array after splicing    C [ 0, 5, true, 'Farhat' ]


// slicing doesn't change the original array, 
// whereas splicing changes(removes a part from the original array) the original array 