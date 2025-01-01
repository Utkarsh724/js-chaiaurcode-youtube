let myDate = new Date() 
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());
//console.log(myDate.toTimeString());
//console.log(myDate.toJSON());
//console.log(typeof myDate); //myDate is of object datatype.

let myCreatedDate = new Date(2025, 0, 20) //We can give specific year, month, day, hour, minute to the date object.
let myCreatedDate2 = new Date(2025, 1, 28, 5, 7)

//console.log(myCreatedDate.toDateString());
//console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("06-14-2025") //mm-dd-yy format
//console.log(myCreatedDate3.toLocaleDateString());
 
//Timestamps

let myTimeStamp = Date.now() //gives the current time in milliseconds from the time that the clock of js was started in around 1970
//console.log(myTimeStamp);

//console.log(myCreatedDate3.getTime()); //definition same as above

//Show time in seconds :-

//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
//console.log(newDate.getMonth() + 1); //Index of month starts from zero

//Making customized dates :-

console.log(newDate.toLocaleString('default',{
    weekday: 'long',
    day: '2-digit',
    year: '2-digit',
}));







