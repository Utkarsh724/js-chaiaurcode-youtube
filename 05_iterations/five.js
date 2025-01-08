//forEach loop :- This is the most used loop for arrays. This is included in the prototype of the array.

//prototype in js :- every object inherits some inbuilt properties and methods which are included in its object prototype

const coding = ["js", "ruby", "java", "python", "cpp"]

//coding.forEach( function (item) {
//    console.log(item);
//} ) //We give the foreach method a callback function. 'item' refers to all the elements of the array.

//coding.forEach( (item) => {
//    console.log(item);
//} )

//passing a function to forEach loop

//function printMe(item){
//    console.log(item);
//}

//coding.forEach(printMe) //We have to give the reference of the function

//coding.forEach( (item, index, arr) => { //foreach loop also has other inbuilt parameters if we want to use them.
//    console.log(item, index, arr);
//} )

//How to handle array of objects with foreach loop

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})