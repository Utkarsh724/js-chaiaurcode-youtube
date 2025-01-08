// for of loop - this loop is mainly used for arrays

const arr = [1, 2, 3, 4, 5]

//for (const num of arr) { //Here 'num' refers to the different values that are stored in the array 'arr'
//    console.log(num);
//    
//}

// this loop can also be used in strings
const greetings = "Hello World"

//for (const greet of greetings ){
//    if(greet == ' '){
//        continue
//    }
//    console.log(`Each char is ${greet}`);
//}

//Map - It is a non-primitive datatype consisting of key-value pairs. It remembers the insertion order of the keys and the size of the map. The keys in this this can be of any datatype unlike object datatype. Map only contains unique values.

const map = new Map()
map.set('IN', "India") //In this the first argument is key and the second argument is value.
map.set('USA', 'United States of America')
map.set('Fr', "France")
map.set('IN', "India") //This is a duplicate value so there are still only 3 key-value pairs in the map after this

//console.log(map);

//for (const [key,value] of map){ //destructuring of an element in map to use in for-of loop
//    console.log(key, ':-', value); //Now we can use the keys and values of the map seperately
//    
//}

const myObj = {
    game1 : 'NFS',
    game2 : 'Spiderman',
    game3 : 'Forza'
}

//for (const game of myObj) { //We can't iterate objects using for-of loop
//    console.log(game);
//}
