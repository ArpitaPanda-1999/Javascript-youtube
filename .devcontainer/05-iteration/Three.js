 // for of 

 //["", "", ""] -- normal array
//[{}, {}, {}] -- array of objects

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
   // console.log(num);
}

const greetings = "hello world"
for (const greet of greetings) {
    if (greet == " ") {
        continue;
    }
    //console.log(`Each char is: ${greet}`);
}

//maps(not iteratable)
const map = new Map()
map.set('IN', "India")
map.set('USA', "United state of america")
map.set('FR', "France")
map.set('In', "India") //this will print because credentials are not match "In" is in small form 
map.set('IN', "India")// this will not print because "map" always prints unique values

//console.log(map);

for (const key of map) {
    //console.log(key);  
} 

for (const [key, value] of map) {
    //console.log(`${key} :- ${value}`);  
} 

//object iteration
//const myObject = { //using object 'for of"
    //'game1' : 'NFS',
    //'game2' : 'Spiderman',
   // game3 : 'NFS',
    //game4 : 'Spiderman'
//}
//not going to iterate because objects don't iterate like this , for that we have different method
//for (const [key, value] of myObject) {
    //console.log(`${key} :- ${value}`);
//}

//object "for in" (print value)
const myObject = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    swift : "swift by Apple" 
}
for (const key in myObject) {
    //console.log(key);
}

for (const key in myObject) {
    //console.log(myObject[key]);
    //console.log(`${key} shortcut is for : ${myObject[key]}`);
}


//Array "for in" (print keys {started from 0} ,give numbers)
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(`programming languages are : ${key}`);
}

for (const key in programming) {
    //  console.log(`programming languages are : ${programming[key]}`);
}

const map1 = new Map()//not iteratable
map1.set('IN', "India")
map1.set('USA', "United state of america")
map1.set('FR', "France")
map1.set('In', "India") 
map1.set('IN', "India")

for (const key in map1) {
    console.log(key);
}