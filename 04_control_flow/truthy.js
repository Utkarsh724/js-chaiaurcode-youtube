//Truthy values are the values that are considered to be true

const userEmail = []

if(userEmail){
    console.log("got user email");
} else {
    console.log("Don't have user email");
}

//Falsy values :- false, 0, -0, 0n (used in Bigint), "", null, undefined, NaN

//Truthy values :- Every value except the above or falsy values are truthy values. Eg :- "0", 'false', " ", [], {}, function(){}

//if(userEmail.length === 0){
//   console.log("Array is empty");
//}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){ //This is the way to check for an empty object.
    console.log("Object is empty");
    
}

// Nullish Coalescing Operator (??) :- this is made for null and undefined. This is used for error handling.

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10 //This is basically used in situations when we are fetching a value from a database. If we get a null or undefined value from the database which is not ideal then this operator assigns a different specified value that can be from a function to the variable.
//val1 = undefined ?? 15
//val1 = null ?? 10 ?? 20 //In this case the first value that is encountered after the null or undefined value (10) is put in the variable. We don't go further after encountering the first value.

console.log(val1);

// Terniary Operator

// condition ? execute if true : execute if false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80")


