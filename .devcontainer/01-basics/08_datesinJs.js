//Dates

let myDate= new Date()
//console.log(myDate);
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleDateString());
//console.log(typeof myDate);


//let myCreatDate= new Date(2023, 0, 23)
//let myCreatDate1= new Date(2023, 0, 23, 5, 3)
//let myCreatDate2= new Date("2023-01-23")
//console.log(myCreatDate.toDateString());
//console.log(myCreatDate1.toLocaleString());
//console.log(myCreatDate2.toLocaleString());

let myCreatDate2= new Date("2023-01-23")
let myTimeStamp= Date.now()

//console.log(myTimeStamp);
//console.log(myCreatDate2.getTime());
//console.log(Date.now());//exact time
//console.log(Date.now()/1000);//convert to seconds
//console.log(Math.floor(Date.now()/1000));//math.floor convert decimal value into single digit value

let newDate= new Date()
//console.log(newDate);
//console.log(newDate.getMonth());
//console.log(newDate.getDay());

console.log(newDate.toLocaleString('default', {weekday: "long" }));