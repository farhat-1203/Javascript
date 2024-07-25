// declaring an object
// const tinderUser = new Object()          // singleton object
const tinderUser = {}                       // non-singleton object

tinderUser.id = "221P019"
tinderUser.name = "Farhat Momin"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email : "someone@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Farhat",
            lastName : "Momin"
        }
    }

}

// accessing the element of an object
console.log(regularUser.fullName.userFullName.firstName);       // Farhat


// merging the objects

const objectOne = {1:"A", 2:"B", 3:"C", 3:"D"}
const objectTwo = {5:"E",6:"F",7:"G",8:"H"}

// const objectThree = {objectOne, objectTwo}      
// console.log(objectThree);               // returns a newly created nested object, by merging the existing objects

// const objectThree = Object.assign({}, objectOne,objectTwo)
// console.log(objectThree);                  // {1:"A", 2:"B", 3:"C", 3:"D",5:"E",6:"F",7:"G",8:"H"}


// most preferred 
const objectThree = {...objectOne,...objectTwo}
console.log(objectThree);                     // {1:"A", 2:"B", 3:"C", 3:"D",5:"E",6:"F",7:"G",8:"H"}

// whenever we get values from database, we get an array of objects
const users=[
    {
        id: "221P019",
        email: "farhatmomin@gmail.com"
    },
    {
        id: "221P044",
        email: "seeminkhan@gmail.com"
    },
    {
        id: "232P003",
        email: "ishashaikh@gmail.com"
    }
]

console.log((users[0]));     // { id: '221P019', email: 'farhatmomin@gmail.com' }

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("id"));    // if we want to check whether a value exist or not, then we use hasOwnProperty => returns a boolean value


// Destructuring an object

const course = {
    courseName: "Ultimte Python",
    price: 999,
    validity: "lifetime",
    courseInstructor: "Dhaval Patel"
}

// console.log(course.courseInstructor);    // accessing an element

const {courseInstructor} = course
console.log(courseInstructor);          // Dhaval Patel

const {courseInstructor: mentor} = course 
console.log(mentor);                    // Dhaval Patel


// JSON
// {
//     "name": "Farhat Momin";
//     "age": "19";
//     "profession": "student"
// }


// [
//     {},
//     {},
//     {}
// ]