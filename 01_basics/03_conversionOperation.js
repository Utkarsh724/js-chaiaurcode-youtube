let score = undefined

console.log(typeof score)

let valueInNumber = Number(score) //conversion to number data type

console.log(typeof valueInNumber)

console.log(valueInNumber)

/* Conversion to number -
"33" => 33
"33abc" => NaN
true => 1; false => 0
null => 0
undefined => NaN
*/

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

/*Conversion to boolean
1 => true; 0 => false
"" => false
"utkarsh" => true
*/

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
