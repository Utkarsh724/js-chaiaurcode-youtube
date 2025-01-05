// Immediately invoked function expressions (IIFE)

//The below function is called 'named IIFE' as it has a name.
(function chai(){  //These are the functions that are immediately called after their declaration. They are used to protect the code from global scope pollution (this pollution occurs when we accidentaly access a variable of the global scope in the child scope )
    console.log(`DB connected`); //In this function the first '()' acts as the function body and name and the second '()' acts as the function call.
})(); //We need this semi-colon to end the context for these type of functions

//The below function is called 'unnamed IIFE' as it doesn't have a name.
( (name) => {
    console.log(`DB connected two ${name}`);
})('Utkarsh');