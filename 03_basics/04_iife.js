// Immediately Invoked Function Expressions (IIFE)

(function chai(){                       // named iife
    console.log("DB connected");
}());                                   // DB connected 

// IIFE: ()()

( (name) => {                           // denamed iife
    console.log(`DB connected ${name}`);
})("Farhat")                            // DB connected Farhat