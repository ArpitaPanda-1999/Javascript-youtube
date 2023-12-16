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
    //let result = number1 + number2;
    //console.log(result);
    return number1 + number2;
}
const result = addTwoNumber(3, 4)
//console.log("Result: ", result);

function loginUserMessage(userName){
    return `${userName} just logged in`
}
//console.log(loginUserMessage("Arpita"));

function loginUserMessage(userName){
    if(userName === undefined){
        //console.log("please enter a Valid Number");
        return //this will not execute other code out side
    }
    return `${userName} just logged in`
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

const user = {
    name: "arpita",
    price: 333
}
function handleObject(anyObj){
   // console.log(`username is ${anyObj.name} and price is ${anyObj.price}`);
}
//handleObject(user)
handleObject({
    name: "Ankita",
    price: 488
})

const myArray = [200, 300, 500, 700]

function returnSecondArr(getArray){
    console.log(getArray[3]);
}
returnSecondArr(myArray)