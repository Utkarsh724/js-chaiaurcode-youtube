const accountId = 144553  //const variables can't be changed
let accountEmail = "Utkarsh@google.com" 
var accountPassword = "12345" //it has scope problem - if you update a variable in some scope it may change the variable with same name in the main scope 
accountCity = "Jaipur"
let accountState; //If you dont define a value then it will have the value undefined

//In javascript you can use semi colon or not its up to you.
// accountId = 2 //not allowed

accountEmail = "hello@gmail.com"
accountPassword = "212121"
accountCity = "Delhi"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
