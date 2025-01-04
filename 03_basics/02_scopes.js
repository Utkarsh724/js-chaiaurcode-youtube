var c = 300 // The value of c variable can still be changed inside any other local scope which is the problem because of declaring it using var.
let a = 300 // This variable is in global scope
if(true){ //Here '{}' brackets denote the scope of the if statement. This is called block scope and the statements outside this block scope are in global scope.
    let a = 10
    const b = 20
    var c = 30 // Here the variable c using var decalaration can still be accessed outside the scope of this if statement. This is the the scope problem with var which is not present in let and const.
    //console.log("Inner: ", a);
    
}

//console.log(a);
//console.log(b);
//console.log(c);

//Every different environment has different scope or global scope. For example the global scope in nodejs is different than the global scope of the console in browser.


function one(){
    const username = "utkarsh"

    function two(){
        const website = "youtube" //function two can access variables from function one but vice versa cannot happen because function one has larger scope.
        console.log(username);    //This is called closure property which means that you can access variables from parent scope in the child scope but not vice versa.
        
    }
    //console.log(website);
    two()
}

//one()

if(true){
    const username = "utkarsh"
    if(username === "utkarsh"){
        const website = "youtube"
        //console.log(username + website);
    }
    //console.log(website);
}

//console.log(username);

// ++++++++++++++++++ interesting +++++++++++++++++++
//These are 2 types of function declaration :-

console.log(addOne(5)) //This function call will run inspite of it being above its function declaration. This is due to hoisting. In hoisting all the function declarations are hoisted at the top of their global scope which means that we can call these functions before their declaration in the code. This will not happen with functions that are stored in a variable as those functions are subject to the temporal dead zone.

function addOne(num){ //
    return num + 1
}

//addTwo(5)

const addTwo = function(num){ //This type of function declaration is also called expression in which you store the function inside a variable. If you call this function above its declaration then it will show reference error. This is because these functions are subject to temporal dead zone.
    return num + 2
}

