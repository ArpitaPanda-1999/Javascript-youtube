const myNums = [1, 2, 3]

//const myTotal = myNums.reduce( (acc, currval) => {
    //console.log(`${acc} and ${currval}`);
  //  return acc + currval;
//}, 3) //after comma this is initial value 

const myTotal = myNums.reduce( (acc, currval) => acc + currval ,0);

//console.log(myTotal);

const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "py course",
        price : 4099
    },
    {
        itemName : "mobile dev course",
        price : 5999
    },
    {
        itemName : "data science course",
        price : 12999
    }
];

const priceToPay = shoppingCart.reduce( (item) => {return  acc + item.price},0);

console.log(priceToPay);