
// var c = 300

// global scope
let a = 300         // global variable: can be accessed anytime anywhere   

// block scope
if (true){
    let a = 10          // block variable: can be only accessed within the block
    const b = 20        // block variable: can be only accessed within the block
    console.log("INNER: ", a);          // INNER: 10

}



console.log(a);         // 300
// console.log(b);
// console.log(c);


function one(){
    const username = "Farhat"
    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);
    two()               // Farhat
}
one()



if (true){
    const username = "Farhat"
    if (username==="Farhat"){
        const lastName = " Momin"
        console.log(username+lastName);
    }
    // console.log(lastName);
}
// console.log(username);


// ******* Interesting *******

console.log(addOne(5));             // 6   --- error free
function addOne(number){            // function declaration 
    return number+1
}


console.log(addTwo(5));             // this will give error, since here comes the concept of hoisting (calling function before declaring it)
const addTwo = function(number){            // function declaration and holding it in a variable  
    return number+1
}

