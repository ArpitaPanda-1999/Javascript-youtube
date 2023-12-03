const tinderApp = new Object()//singleton Object
const tinderApp1 = {}//non-singleton object

tinderApp1.id = "123abc"
tinderApp1.name = "Arpita"
tinderApp1.isLoggedIn = false

//console.log(tinderApp);
//console.log(tinderApp1);

const regularUser = {
    email:"arpita@gmail.com",
    fullname: {
        userName:{
            Firstname:"Arpita",
            Lastname:"Panda"
        }
    }
}
//console.log(regularUser.fullname.userName.Lastname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj4 = {5:'a', 6:'y'}
//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2, ...obj4}
//console.log(obj3);

console.log(tinderApp1);
console.log(Object.keys(tinderApp1));
console.log(Object.values(tinderApp1));
console.log (Object.entries(tinderApp1));
console.log(tinderApp1.hasOwnProperty('isLoggedIn'));
console.log(tinderApp1.hasOwnProperty('isLogged'));