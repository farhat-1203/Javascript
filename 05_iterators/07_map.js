const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.map((num) => num + 1)
// console.log(newNums);                              //   [2,3,4,5,6,7,8,9,10,11]

// const newNums = myNums.filter((num) => num++)
// console.log(newNums);                              // [1,2,3,4,5,6,7,8,9,10]  no changes

// emptyArray = []
// const newNums =  myNums.forEach (function (num) {
//     num++
//     emptyArray.push(num)
// })        

// console.log(emptyArray);                               //   [2,3,4,5,6,7,8,9,10,11]


// Chaining: applying 2-3 methods together

const newNums = myNums.map((num) => num*10).map((num) => {return num + 1}).filter((num) => (num>50))
console.log(newNums);

