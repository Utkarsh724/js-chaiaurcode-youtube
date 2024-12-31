/* Based on how data is stored in memory and accessed we have two data types :-

Primitive :-
These are call by value, the copy of the value is given and not the original reference.
7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

Non-Primitive :-
These are call by reference, their reference from memory is directly given 
Array, Objects, Functions

Javascript is dynamically typed. The interpreter assigns variable type based on its value during runtime so in this we can assign
any type of value to a variable without declaring its type.
*/

//Symbol - typeof symbol will give you symbol

const id = Symbol('123') 
const anotherId = Symbol('123')

console.log(id === anotherId); //False as symbol is unique for each variable

//bigint - typeof bigint will give you bigint

const bigNumber = 34345567243554655435654n //This is bigint

//Arrays - typeof array will give you object

const heroes = ["Iron man", "Shaktiman", "Hulk"]

//Objects - typeof object will give you object

let myObj = { 
    name : "Utkarsh", 
    age : 21, 
    height : 183,
}

//Function - typeof function will give you function

const myFunction = function(){
    console.log("Hello World");
}

//typeof - finds data type of a variable

console.log(typeof id);



