
// reduce method takes 3 argument: Accumulator & Current Value

const myNums = [1,2,3,4,5]

// arrow function
let myRed = myNums.reduce((acc,currVal) => {
    console.log(`Accumulator: ${acc} and Current Value: ${currVal}`);
    return acc + currVal
}, 0)

// console.log(myRed);                      // 15


// function call
myRed = myNums.reduce(function (acc,currVal) {
    console.log(`Accumulator: ${acc} and Current Value: ${currVal}`);
    return acc + currVal
}, 0)

// console.log(myRed);                     // 15

myRed = myNums.reduce((acc, currVal) => (acc+currVal), 0)
console.log(myRed);

const shoppingCart = [
    {
        itemName: "JS Course",
        price: 2999
    },
    {
        itemName: "Python Course",
        price: 2999
    },
    {
        itemName: "Java Course",
        price: 2999
    },
    {
        itemName: "Web-Dev Course",
        price: 2999
    },
    {
        itemName: "Machine Learning Course",
        price: 2999
    },
    {
        itemName: "Data Science Course",
        price: 12999
    }
]



const finalExp = shoppingCart.reduce((acc, product) => (acc + product.price), 0)
console.log(`Your cart has items worth Rs.${finalExp}`);