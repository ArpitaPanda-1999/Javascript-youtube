const myArray = [0, 1, 2, 3, 4, 5, 6]
//console.log(myArray);

const myHeros = ["shaktiman", "naagraj", "doga"]
//console.log(myHeros);

const myArray2 = new Array(3, 5, 6, 3, 9)
//console.log(myArray2);

//Array Methods

//myArray.push(8);
//myArray.pop();
//myArray.unshift(9)//time consuming method because if we add somthing in arrays 1st index then we have to shift all other indexes too..it is time consuming and difficult to perform
//myArray.shift()
//console.log(myArray);

//console.log(myArray.includes(5));
//console.log(myArray.indexOf(3));

const newArray = myArray.join()
//console.log(myArray);
//console.log(newArray);
//console.log(typeof newArray); 

console.log("A", myArray);

const myNew1 = myArray.slice(0,3)
console.log(myNew1);
console.log("B", myArray);

const myNew2 = myArray.splice(0,3)
console.log(myNew2);
console.log("C", myArray);