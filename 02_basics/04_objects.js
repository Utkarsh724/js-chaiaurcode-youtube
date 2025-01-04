//const tinderUser = new Object() //This is singleton object
const tinderUser = {} //This is non singleton object

tinderUser.id = "123abc"
tinderUser.name = "John"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email : "name@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Utkarsh",
            lastname : "Rawat"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

//const obj3 = { obj1, obj2 } //This is a problem as there are objects inside objects in this.
//const obj4 = Object.assign({}, obj1, obj2, obj3) //returns a concatenated object from given objects. In this the first parameter is the target object and the other parameters are concatenated into the target object. The returned object is the target object.

const obj4 = {...obj1, ...obj2, ...obj3} //Spread operator('...') :- This is the best way to concatenate objects
//console.log(obj4);

const users = [
    {
        id: 1,
        email: "user@gmail.com",
    },
    {
        id: 1,
        email: "user@gmail.com",
    },
    {
        id: 1,
        email: "user@gmail.com",
    },
]

//console.log(users[1].email)
//console.log(tinderUser);

//console.log(Object.keys(tinderUser)); //Returns an array containing keys of the specified object.
//console.log(Object.values(tinderUser)); //Returns an array containing values of the specified object.
//console.log(Object.entries(tinderUser)); 

//console.log(tinderUser.hasOwnProperty('isLoggedIn')); //Returns true if the specified object contains the specified key.

//Destructuring of objects :-

const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "Utkarsh"
}

const {courseInstructor: instructor} = course //Now we dont have to specify the object name everytime we want to access its key. This is called destructuring. We can also change the name for accessing the key by writing a new name after ':'.

//console.log(courseInstructor);
console.log(instructor);

//{
//    "name" : "Utkarsh",             //This is an example of json object which is given by api. The api gives this in the form of a string which is then parsed into a json object. In this usually, the keys and values both are also strings.
//    "coursename" : "js in hindi",   //JSON full form - Javascript object notation
//    "price" : "free",
//}