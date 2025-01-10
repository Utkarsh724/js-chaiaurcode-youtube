const myNums = [1, 2, 3]

//const newTotal = myNums.reduce( (accumulator, currentValue) => { //This function returns the total accumulator value. We have to initiliaze the accumulator by some value ( Like the 0 we gave here after ',' ).
//    console.log(`Accumulator: ${accumulator} and current value ${currentValue}`)
//    return accumulator + currentValue
//}, 0)

//console.log(newTotal);

//Calculate the total price of a shopping cart ( Array of objects ).

const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "py course",
        price : 999
    },
    {
        itemName : "mobile dev course",
        price : 5999
    },
    {
        itemName : "data science course",
        price : 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);
