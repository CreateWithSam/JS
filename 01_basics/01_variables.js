const accountId = 12345 // we can't change const
let accountEmail = "sameer@gmail.com" // we can change let
var accountPassword = "98765" // we can change var
accountCity = "Darbhanga"  
let accountState;


// accountId = 2 // not allowed



accountEmail = "sam@gmail.com"
accountPassword = "348578"
accountCity = "Delhi"

console.log(accountId);

/*
perfer not to use var 
Why? beacause of issue in block scope and functional scope
*/

console.table([accountEmail, accountId, accountPassword, accountCity, accountState])
