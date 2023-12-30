const user = {
    username: 'Arpita', //this function work on object only
    price: 999,
    
    welcomeMessage: function () {
        //console.log(`${this.username} welcome to website`);
        console.log(this);
    }
}
//user.welcomeMessage()

//user.username = 'Sonu'
//user.welcomeMessage()
console.log(this);

function chai() {
    let username = 'Arpita'// this function is not working on functions
    //console.log(this.username);
    //console.log(this);
}
chai()

const chai1 = function () {
    let username = 'Arpita'
    //console.log(this.username);
}
chai1()

const chai2 = () => {
    let username = 'Arpita'
    //console.log(this.username);
}
chai2()

const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3,5));

const addTwo1 = (num1, num2) => num1 + num2
console.log(addTwo1(3,5));

const addTwo2 = (num1, num2) => (num1 + num2)
console.log(addTwo2(3,5));

const addTwo3 = () => ({username:'Arpita'})
console.log(addTwo3);