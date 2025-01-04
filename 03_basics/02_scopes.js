var c = 300 // The value of c variable can still be changed inside any other local scope which is the problem because of declaring it using var.
let a = 300 // This variable is in global scope
if(true){ //Here '{}' brackets denote the scope of the if statement. This is called block scope and the statements outside this block scope are in global scope.
    let a = 10
    const b = 20
    var c = 30 // Here the variable c using var decalaration can still be accessed outside the scope of this if statement. This is the the scope problem with var which is not present in let and const.
    console.log("Inner: ", a);
    
}

console.log(a);
//console.log(b);
//console.log(c);

//Every different environment has different scope or global scope. For example the global scope in nodejs is different than the global scope of the console in browser.
