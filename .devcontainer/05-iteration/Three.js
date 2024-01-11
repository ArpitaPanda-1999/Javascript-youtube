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

//maps(not iteratable) === it returns automatically 
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

const map1 = new Map()//not iteratable
map1.set('IN', "India")
map1.set('USA', "United state of america")
map1.set('FR', "France")
map1.set('In', "India") 
map1.set('IN', "India")

for (const key in map1) {
    console.log(key);
}