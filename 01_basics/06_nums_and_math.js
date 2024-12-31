const score = 400

//console.log(score);

const balance = new Number(100) //Returns a number object

//console.log(typeof balance);

//console.log(balance);
//console.log(balance.toString().length);
//console.log(balance.toFixed(2)); //gives value upto specified decimal places

const otherNumer = 23.8966

//console.log(otherNumer.toPrecision(3)); //gives round of value upto the digits specified

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN')); //gives a string with commas according to the number system specified

// +++++++++++++++++++ MATHS +++++++++++++++++++++++

//console.log(Math.abs(-4)); //Returns the value without its sign (negative value turns into positive value)
//console.log(Math.round(4.665)); //Rounds off the value to nearest integer
//console.log(Math.ceil(4.2)); //Return the ceiling of the number
//console.log(Math.floor(4.6)); //Returns the floor value of the number
//console.log(Math.min(2,5,1,7)); //Returns the min value

console.log(Math.random()); //Returns a random value between 0 and 1

console.log(Math.floor(Math.random()*100) + 1);

//Formula to give a random value between a specified range -

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);






