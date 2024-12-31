const name = "utkarsh"
const repCount = 50

//console.log(name + repCount + " Value"); //Old syntax. Don't use this.

//console.log(`Hello my name is ${name} and my repo count is ${repCount}`) //This is new syntax and is known as string interpolation
                                                                         //. This should be used now. This uses backticks. This
                                                                         //uses placeholders - ${}
const gameName = new String('utkarsh game') //Here the string is of object datatype

//console.log(typeof gameName);
//console.log(gameName[0]);
//console.log(gameName.__proto__);
//console.log(gameName.length);
//console.log(gameName.toUpperCase()); //But this doesnt change our original string. The string methods return a new string.
//console.log(gameName);
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('k'));
const newString = gameName.substring(0,4) //This gives the substring - we give it the start index and the end index, and the 
                                          //character at the end index is not included
//console.log(newString);

const anotherString = gameName.slice(-10,6) //This also gives the substring - we give it the start index and the end index, and 
                                         // the character at the end index is not included. We can also give it negative values.
                                            //Using negative values means we go to the left from the last index of the string.
const anotherString2 = gameName.slice(0,-1)
                                            
//console.log(anotherString);

//console.log(anotherString2);

const newStringOne = "   utkarsh   "
//console.log(newStringOne);
//console.log(newStringOne.trim()); //This removes blank/white spaces from both starting and end.

const url = "https://utkarsh.com/utkarsh%20rawat"
//console.log(url.replace('%20','-')) //Replaces the specified character or characters with the required character. 

//console.log(url.includes('utkarsh'));

const gameName2 = "Utkarsh-best-game"
console.log(gameName2.split('-')); //This returns an array. The elements are seperated by the specified character called seperator









