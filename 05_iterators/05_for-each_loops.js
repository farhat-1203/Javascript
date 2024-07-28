
const coding = ["Js", "Python", "Java", "Ruby", "Cpp"]

// // iterating on a simple call back function
// coding.forEach( function (item) {
//     console.log(item);
// } )


// // iterating through arrow function
// coding.forEach((item)=> {console.log(item);})


// function printMe(item){
//     console.log(item);
// }
// printMe("Farhat")

// // directly iterating on a function
// coding.forEach(printMe())



// accessing each element of an array along with it's index no. and the whole array

coding.forEach((item, index, arrayList)=>{
    console.log(item, index,arrayList);
})


// // declaring an array of objects
const myCoding = [
    {
        languageName: "javascript",
        languageExt: ".js"
    },
    {
        languageName: "java",
        languageExt: ".java"
    },
    {
        languageName: "python",
        languageExt: ".py"
    }

]

// iterating on array of objects ... by using item._____
myCoding.forEach((item)=> {

    console.log(item.languageName);
})