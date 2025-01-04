const user = {
    username : "Utkarsh",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    },
}

//user.welcomeMessage()
//user.username = "Yash"
//user.welcomeMessage()

//console.log(this); //In node environment 'this' refers to the global object which is an empty object while in browser 'this' refers to the global object which is Window object.

//function chai(){
//    let username = "Utkarsh"
//    console.log(this.username); //we can't use 'this' keyword to access variables in functions.
//    
//}

//chai()

//const chai = function(){
//   let username = "Hitesh"
//    console.log(this.username);
//}

const chai = () => { //This is arrow function
    let username = "Utkarsh"
    console.log(this); //'this' keyword doesn't work in this also. 'this' shows an empty object in arrow function if it is called independently unlike normal functions which shows some info about the function.
}

//chai()

//const addTwo = (num1, num2) => {
//   return num1 + num2
//}

//const addTwo = (num1, num2) => num1 + num2 //This is called implicit return. This can be used only when we have 1 line of statement in the function. We can omit brackets and return keyword in this.

//const addTwo = (num1, num2) => (num1 + num2) //We must use return keyword if we use {} brackets but if we use () brackets then we have to omit return keyword (for implicit return).

const addTwo = (num1, num2) => ({username: "utkarsh"})

console.log(addTwo(3,4))