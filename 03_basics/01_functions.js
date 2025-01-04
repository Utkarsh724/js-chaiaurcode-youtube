function sayMyName(){
    console.log("Utkarsh");
}

//sayMyName() //If we don't use brackets then we will get the reference of the function. By using brackets we are calling the function.

//function addTwoNumbers(number1, number2){ //Here number1 and number2 are parameters and not arguments.
//    console.log(number1 + number2);
//    
//}

function addTwoNumbers(number1, number2){
    //let result = number1 + number2
    //return result //The function does not execute anything below a return statement as the function returns during it.
    return number1 + number2
}

const result = addTwoNumbers(3,5) //Here 3 and 5 are arguments and not parameters.
//console.log("Result: ", result);

function loginUserMessage(username = "Sam"){ // Declaring default value
    if(!username){ // empty string(''), undefined and null :- these are false values so !username is a better way to check for false values.
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}

console.log(loginUserMessage('utkarsh'));
