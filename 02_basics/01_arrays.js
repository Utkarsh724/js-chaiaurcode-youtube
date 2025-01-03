const myArr = [0,1,2,3,4,5] //arrays in js are resizable and can contain a mix of datatypes. Array is of object datatype.
                            //If you do array-copy operations then it copies the reference of the array.
const myHeroes = ["Shaktiman", "Iron man"]

const myArr2 = new Array(1,2,3,4,5)
//console.log(myArr2[0]);

//Array methods

//myArr.push(6)
//myArr.push(7)
//console.log(myArr);
//myArr.pop()
//myArr.unshift(9) //Inserts element at the start of the array. All the elements shift by 1 index due to this.
//myArr.shift() //removes element from the start of the array.
//console.log(myArr.includes(1)); //Gives boolean value.
//console.log(myArr.indexOf(3)); //Gives index of the specified element in the array.

//const newArr = myArr.join('-') //Creates a string of all the elements of the array, seperated by the specified seperator(',' is default).

//console.log(myArr);
//console.log(newArr);

// slice, splice :-

console.log("A ", myArr);

const myArr3 = myArr.slice(1, 3) //Returns subarray from the start index to the end index. The end index is not included. The 
                                 //original array is left unchanged.
console.log(myArr3);
console.log("B ", myArr);

const myArr4 = myArr.splice(1,3) //Returns subarray from the start index to the end index. The end index is also included. The 
                                 //original array is changed. The elements are omitted from the original array.
console.log(myArr4);
console.log("C ", myArr);





