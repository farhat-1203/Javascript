const accountId = 2512
let accountEmail = "farhatmomin@gmail.com"
var accountPassword = "1892183"
accountCity = "Mumbai"
let accountState

// accountId = 2     // not allowed 
console.log(accountId);

accountEmail = "fm@gmail.com"
accountPassword = "736275"
accountCity = "Bangalore"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
Prefer not to use 'var' 
because of issue in block scope and functional scope 
*/