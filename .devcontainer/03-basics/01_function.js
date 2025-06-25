//console.log("A");
//console.log("R");
//console.log("P");
//console.log("I");
//console.log("T");
//console.log("A");

function sayMyName() {
    console.log("A");
    console.log("R");
    console.log("P");
    console.log("I");
    console.log("T");
    console.log("A");
}
//sayMyName()


function addTwoNumber(number1, number2){
    //console.log(number1 + number2);
    let result = number1 + number2;

    return result;//after "return" u can't print anything
    // return number1 + number2; // if u are returning .. then only u can store the execution in a new variable;
}
const result = addTwoNumber(3, "4")
// console.log("Result: ", result); // if u do "console.log" instade of "return" and then u want to print then it will give u "undefined" 




function loginUserMessage(userName){
    return `${userName} just logged in`
}
//loginUserMessage("Arpita");//without "console.log" it will not give u any input
//console.log(loginUserMessage()); //no argument gives ---- "undefined"
//console.log(loginUserMessage("Arpita"));




function loginUserMessage(userName){ //default parameter u can give(userName = "Arpita") 
    if(userName === undefined){//another way (!userName)
        //console.log("please enter a Valid Number");
        return //this will not execute other code after it
    }
    return `${userName} just logged in` //no work after above "return"
}
//console.log(loginUserMessage());




function calculateCartPrice(...num1){
    return num1
}
//console.log(calculateCartPrice(200, 300, 400, 500));



function calculateCartPrice1(val1, val2,...num2){
    return num2
}
//console.log(calculateCartPrice1(200, 300, 400, 500));
//return value will print only



const user = {
    name: "arpita",
    price: 333
}
function handleObject(anyObj){
   // console.log(`username is ${anyObj.name} and price is ${anyObj.price}`);
}
handleObject(user);

//we can directly pass object inside call back function
handleObject({
    name: "Ankita",
    price: 488
})



const myArray = [200, 300, 500, 700]

function returnSecondArr(getArray){
    return getArray[3];
}
console.log(returnSecondArr(myArray));
console.log(returnSecondArr([200, 300, 500, 700]));