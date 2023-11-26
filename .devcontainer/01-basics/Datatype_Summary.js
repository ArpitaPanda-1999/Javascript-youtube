//primitive datatype

//7types=> Number, String, Boolean, Null, Symbol, Undefined, BigInt

//const score=100
//const scoreValue=100.2

//const isLoggedIn=false
//const outsideTemp=null
let userEmail;
console.log(userEmail);

const id=Symbol('435436')
const anotherId=Symbol('435436')
console.log(id===anotherId);

const bigInt=4657687980980n
console.log(bigInt);


//Reference (non-primitive)

//Array, function, Object

const hero=["shaktiman", "naagraj", "doga"]
console.log(hero);

let userDetail={
    name:"Arpita",
    age:24
}
console.log(userDetail);

const myFunction=function () {
    console.log("hello world");
}
console.log(typeof myFunction);