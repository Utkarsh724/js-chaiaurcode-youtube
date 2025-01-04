//singleton objects - objects created by constructors. These type of objects cannot be created by literals.
//Object.create - creates singleton object

//object literals (this is a type of object declaration) :-

const mySym = Symbol("mySymbol") //This is symbol

const jsUser = {                    //Objects have keys and values
    name : "utkarsh",
    "full name" : "utkarsh rawat",  //We can't access full name by '.' operator, we access this by using [] brackets.
    [mySym] : "mykey1",  //This is the method by which we can add a symbol as a key to an object. We can access this symbol as key of the object only by using [] brackets.
    age : 20,
    location : "Haridwar",
    email : "utkarsh@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

//console.log(jsUser.email);
//console.log(jsUser["email"]);
//console.log(jsUser['full name']);
//console.log(jsUser[mySym]);

jsUser.email = "utkarsh@chatgpt.com"
//console.log(jsUser);

//Object.freeze(jsUser) //Freezes the object. After this you can't make changes to the object.
jsUser.email = "utkarsh@microsoft.com"
//console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Js user.");
}

jsUser.greeting2 = function (){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());





