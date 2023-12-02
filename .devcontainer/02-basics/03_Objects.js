//object declaration possible in 2 ways -- litteral and constructor 
// singleton -- made up of only with constructor  

//Object.create()

//myArr = ["a", "p"]
//myArr[1]


//object literals --

const mySym = Symbol("key1")

const jsUser = {
   name:"Arpita",
   "fullname":"Arpita panda",
   [mySym]:"savekey1",
   age:24,   
   location:"jaipur",
   email:"arpita@gmail.com",
   isLoggedIn:false,
   lastLoginDays:["monday", "Tuesday"]
}

//console.log(jsUser.email);
//console.log(jsUser["email"]);
//console.log(jsUser["fullname"]);
//console.log(jsUser[mySym]);
//console.log(typeof jsUser[mySym]);

jsUser.email = "arpita@chatGPT.com"
//jsUser.Freeze(jsUser)
//console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user");
}

jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
