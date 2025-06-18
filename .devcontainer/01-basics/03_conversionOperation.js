let score="74fsd"

//console.log(typeof score);
//console.log(typeof (score));

//74 =>numbertype=>74
//74fgh =>numbertype=>NaN
//true=>1 ;false=>0

let valueOfNumber=Number(score)
let valueOfNumber1= String(score)

console.log(typeof valueOfNumber);//number
console.log(typeof valueOfNumber1);//string

console.log(valueOfNumber);//NaN
console.log(valueOfNumber1);//74fsd

let score1=null
let numberNull=Number (score1);
console.log(numberNull);//0


let score2=undefined
let numberUndefined= Number(score2);
console.log(numberUndefined);//NaN

let score3=true
let numberBoolean=Number(score3)
console.log(numberBoolean);//1

let score4=false
let numberBoolean1= Number(score4)
console.log(numberBoolean1);//0

let isLoggedIn=1 //" "(false), "arpita"(true), 0(false)
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);//true

let isLoggedIn1= "";
let booleanIsLoggedIn1=Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn1);//false

let isLoggedIn2= "AP";
let booleanIsLoggedIn2=Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2);//true

//node .devcontainer/01-basics/03_conversionOperation.js 