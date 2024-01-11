const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNums = myNumbers.map( (num) => num + 10);
//const newNums = myNumbers.map( (num) => {return num + 10});
myNumbers.forEach( (num) => {
    //num = num + 10;
    //console.log(num);
});

//chain method
const newNums = myNumbers 
               .map( (num) => num * 10 )   //create a new array
               .map( (num) => num + 1 )   //that new array will execute in the second method
               .filter( (num) => num >=40 )
console.log(newNums);