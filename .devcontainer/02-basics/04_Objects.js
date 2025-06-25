const tinderApp = new Object()//singleton Object
const tinderApp1 = {}//non-singleton object

tinderApp1.id = "123abc"
tinderApp1.name = "Arpita"
tinderApp1.isLoggedIn = false

//console.log(tinderApp);
//console.log(tinderApp1);
//console.log(tinderApp1.hasOwnProperty('isLoggedIn'));
//console.log(tinderApp1.hasOwnProperty('isLogged'));


const regularUser = {
    email:"arpita@gmail.com",
    fullname: {
        userName:{
            Firstname:"Arpita",
            Lastname:"Panda"
        }
    }
}
//console.log(regularUser.fullname?.userName.Lastname); //"?" will safe the value to be wrong , like if there is no value persent then it will safe u from getting error;

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj4 = {5:'a', 6:'y'}
//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2);// " {} " this is a good practice otherwise it will give u the same result
const obj3 = {...obj1, ...obj2, ...obj4}
//console.log(obj3);

//console.log(tinderApp1);
//console.log(Object.keys(tinderApp1));
//console.log(Object.values(tinderApp1));
//console.log (Object.entries(tinderApp1));


//Array Object
const user = [
    {
        id: 1,
        name: "Arpita",
        position: "eldest"
    },
    {
        id: 2,
        name: "Ankita",
        position: "elder"
    },
    {
        id: 3,
        name: "Amisha",
        position: "younger"
    },
    {
        id: 4,
        name: "Rameswar",
        position: "youngest"
    },
]

// console.log(user[2].name);
// console.log(Object.keys(user));// this is a array so this is giving address

// console.log(Object.keys(regularUser)); //this is giving the actual keys 
// console.log(Object.values(regularUser)); //this will give the values stored inthe keys 





//Destructuring of Object
const course = {
    coursename : "js in hindi",
    fee : "999",
    courseInstructor : "Arpita" 
}

const {courseInstructor:instructor} = course // ":Instructor" in this way u can rename this and using this value u can access their value  
// console.log(instructor);


