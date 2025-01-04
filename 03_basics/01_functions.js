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

//console.log(loginUserMessage('utkarsh'));

function calculateCartPrice(val1, val2, ...num1){ // Here '...' is rest operator (it has same notation as spread operator). It can take variable number of argumnets as parameters and makes an array out of them.
    return num1
}

//console.log(calculateCartPrice(200, 400, 500, 600, 1000));

const user = {
    username : "Utkarsh",
    prices : 199,
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

//handleObject(user)
//handleObject({        //These type of objects that are created on the fly and passed directly as arguments to functions without being assigned to a variable, are called anonymous objects or inline objects.
//    username : "Sam",
//    price : 399
//})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600])); //This is anonymous or inline objects.
