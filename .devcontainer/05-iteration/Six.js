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



const books = [
    {title: "Book one", genre: "Fiction", publish: 1981, edition: 2004},
    {title: "Book two", genre: "Non-Fiction", publish: 1999, edition: 2006},
    {title: "Book three", genre: "Science", publish: 2000, edition: 2007},
    {title: "Book four", genre: "Fiction", publish: 1987, edition: 2009},
    {title: "Book five", genre: "Non-Fiction", publish: 1997, edition: 2011},
    {title: "Book six", genre: "Fiction", publish: 1988, edition: 2012},
    {title: "Book seven", genre: "Science", publish: 2001, edition: 2010},
    {title: "Book eight", genre: "Fiction", publish: 2012, edition: 2022},
    {title: "Book nine", genre: "Non-Fiction", publish: 2013, edition: 2023},
    {title: "Book ten", genre: "Fiction", publish: 1983, edition: 2021}
];

//const userBooks = books.filter( (bk) => bk.genre === "Science");
//const userBooks = books.filter( (bk) => bk.publish >= 2000);
//const userBooks = books.filter( (bk) => (bk.publish >= 2000));
//const userBooks = books.filter( (bk) => {return bk.publish >= 2000});
const userBooks = books.filter( (bk) => {
    return bk.publish >=2000 && bk.genre === "Science";
})
console.log(userBooks);