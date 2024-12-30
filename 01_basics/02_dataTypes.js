"use strict"; // treat all js code as newer version

// alert(3 + 3) // we are using nodejs, not browser, you can run this on browser but not here.

console.log(3
    +
    3) // Here the code readability is bad

let name = "utkarsh"
let age = 18
let isLoggedIn = false

/*
Primitive Datatypes in js -
1) number => it has range upto 2 to power 53
2) bigint => It can store very large values that are more than the datatype-number
3) String => ""
4) boolean => true/false
5) null => It is a standalone value as well as a datatype. It is a representation of an empty value. But it is an object. This being an object is a flaw in js. 
6) undefined => value is not assigned
7) symbol => We use this for uniqueness
*/

/* object */

console.log(typeof null)