const myArray = [0, 1, 2, 3, 4, 5, 6]
//console.log(myArray);

const myHeros = ["shaktiman", "naagraj", "doga"]
//console.log(myHeros);

const myArray2 = new Array(3, 5, 6, 3, 9)
// console.log(myArray2[1]);

//Array Methods

//myArray.push(8);//add a number
//myArray.pop();//last value remove
//myArray.unshift(9)//time consuming method because if we add somthing in arrays 1st index then we have to shift all other indexes too..it is time consuming and difficult to perform
//myArray.shift();//remove first index number
//console.log(myArray);

//console.log(myArray.includes(5));//give result in boolean result

//console.log(myArray.indexOf(3));//give result in boolean result

const newArray = myArray.join()
//console.log(myArray);
//console.log(newArray); 0,1,2,3,4,5 (after conversion to string)
//console.log(typeof newArray); //string 

// console.log("A", myArray);
const myNew1 = myArray.slice(1,3)//
// console.log(myNew1);
// console.log("B", myArray);

const myNew2 = myArray.splice(0,3)
// console.log(myNew2);
// console.log("C", myArray);

//---------------------------------------------------------------

 