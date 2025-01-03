const marvelHeroes = ["Thor", "Ironman", "Spiderman"]
const dcHeroes = ["Superman", "Flash", "Batman"]

//marvelHeroes.push(dcHeroes) //This instead of merging the arrays pushes the array as an element of the original array. So here 
                            //the last element of the original array is the pushed array itself which is not a good practice.
//console.log(marvelHeroes);

//const allHeroes = marvelHeroes.concat(dcHeroes) //This returns a new array solving the above problem.
//console.log(allHeroes);

const allNewHeroes = [...marvelHeroes, ...dcHeroes] //This spreads all the elements of the arrays and is a better solution to 
                                                    //the above problem. '...' is called spread operator.
//console.log(allNewHeroes);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity) //Retuns a new array in which all the sub-array elements are present as
                                                        //normal array elements upto the specified depth.
//console.log(real_another_array);

//console.log(Array.isArray('Utkarsh'));

//console.log(Array.from('utkarsh')); //Creates an array from the given data

//console.log(Array.from({name : "Utkarsh"})); //Interesting case - you have to first specify whether you want to create an array
                                             //from the object's key or values.
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); //Returns a new array from set of elements.

