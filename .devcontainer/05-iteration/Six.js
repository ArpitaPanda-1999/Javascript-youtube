const coding = ["js", "ruby", "java", "python", "cpp"]

const value = coding.forEach((item) => {
    //console.log(item);
    return item; //foreach returns nothing
})
//console.log(value);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNums = myNums.filter( (num) => num > 4)

//const newNums = myNums.filter ( (num) => {
   //return num > 4 // value return in filter 
   //console.log(num > 4); //will print in boolean form
//})

const newNums = []

myNums.forEach((num) => {
    if (num >4) {
        //newNums.push(num)
    }
})

//console.log(newNums);