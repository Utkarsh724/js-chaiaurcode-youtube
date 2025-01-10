const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNums = myNumbers.map( (num) => num + 10) //this modifies or updates or checks on every element of the array.

// Chaining :- the succeeding chained functions do their operations on the array returned by their predeccessor. You can do unlimited chaining and use any method in chaining.

const newNums = myNumbers
.map( (num) => num * 10 )
.map( (num) => num + 1)
.filter( (num) => num >= 40 )

console.log(newNums);