// const coding = ["Js", "Python", "Java", "Ruby", "Cpp"]


// const val = coding.forEach((item)=> {
//     console.log(item);
//     return item
// })

// console.log(val);


const myNumber = [1,2,3,4,5,6,7,8,9,10]
// filter: with filter, we can access individual element of an array, by giving any condition
// const varName = var.filter((eachValue)=> condition)


// let newNum = myNumber.filter((item) => {
    //     return item>4
    // })
    // console.log(newNum);                     // [ 5, 6, 7, 8, 9, 10 ]
    

// accessing individual element of an array by using forEach loop
// const newNums = []
// myNumber.forEach((item) => {
//     if (item>4){
//         newNums.push(item)
//     }
// })
// console.log(newNums);                           // [ 5, 6, 7, 8, 9, 10 ]

const books = [
    {
        title: "To Kill a Mockingbird",
        genre: "Classic",
        fiction: true,
        publish: 1960,
        edition: "1st"
    },
    {
        title: "1984",
        genre: "Dystopian",
        fiction: true,
        publish: 1949,
        edition: "1st"
    },
    {
        title: "The Great Gatsby",
        genre: "Classic",
        fiction: true,
        publish: 1925,
        edition: "1st"
    },
    {
        title: "A Brief History of Time",
        genre: "Science",
        fiction: false,
        publish: 2008,
        edition: "1st"
    },
    {
        title: "The Art of Computer Programming",
        genre: "Computer Science",
        fiction: false,
        publish: 1968,
        edition: "3rd"
    },
    {
        title: "The Catcher in the Rye",
        genre: "Classic",
        fiction: true,
        publish: 1951,
        edition: "1st"
    },
    {
        title: "Sapiens: A Brief History of Humankind",
        genre: "History",
        fiction: false,
        publish: 2011,
        edition: "1st"
    },
    {
        title: "The Hobbit",
        genre: "Fantasy",
        fiction: true,
        publish: 1937,
        edition: "1st"
    },
    {
        title: "The Road",
        genre: "Psychology",
        fiction: true,
        publish: 2006,
        edition: "1st"
    },
    {
        title: "Thinking, Fast and Slow",
        genre: "Psychology",
        fiction: false,
        publish: 2011,
        edition: "1st"
    }
];

let userBooks = books.filter((book) => book.genre === "Science")            // all books having genre 'Science'
userBooks = books.filter((book) => { return book.publish > 2000})                     // all books published after 2000
userBooks = books.filter((book) => {
    return book.genre === "Psychology" && book.publish > 2000
})

console.log(userBooks);

