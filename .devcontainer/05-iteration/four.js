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