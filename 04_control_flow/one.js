// if
const isUserLoggedIn = true

if(isUserLoggedIn){

}

//Comparison operators :- <, >, <=, >=, ==, !=, === (This is strict equals, this also checks the type of the variables), !== (this is strict not equals)

//const score = 200
//
//if(score > 100){
//    const power = "fly"
//    console.log(`User power: ${power}`);
//}

//const balance = 1000

//if(balance > 500) console.log("test"); //implicit scope - this only contains 1 line of code

//if (balance < 500) {
//    console.log("less than 500");
//} else if (balance < 750) {
//    console.log("less than 750");
//} else if (balance < 900) {
//    console.log("less than 900");
//} else {
//    console.log("less than 1200");
//}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true;


//Logical operators :- &&, ||, !

if(userLoggedIn && debitCard) {
    console.log("Allow to buy course.");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in."); 
}
