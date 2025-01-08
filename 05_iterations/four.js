const myObject = {
    js : "Javascript",
    cpp : "C++",
    rb : "Ruby",
    swift : "swift by apple",
}

//for-in loop can be used with objects as well as other datatypes

//for (const key in myObject) { //For objects key refers to all the keys of the object
//    console.log(`${key} shortcut is for ${myObject[key]}`); 
//}

//Use of for-in loop in arrays 

const programming = ["js", "rb", "py", "java", "cpp"]

//for (const key in programming) { //For arrays key refers to all the indexes of the array
//    console.log(programming[key]);
//}

const map = new Map()
map.set('IN', "India") //In this the first argument is key and the second argument is value.
map.set('USA', 'United States of America')
map.set('Fr', "France")
map.set('IN', "India") //This is a duplicate value so there are still only 3 key-value pairs in the map after this

for(const key in map){ //We can't use for-in loop for map
    console.log(key); 
}