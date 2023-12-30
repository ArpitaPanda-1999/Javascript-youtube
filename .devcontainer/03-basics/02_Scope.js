//let a = 10
//const b = 20
//var c = 30
let a = 200

if (true) {
    let a = 10
    const b = 20
    var c = 30
    d = 40
    //console.log('INNER : ',a);
}


//console.log(a);
//console.log(a);
//console.log(b);
//console.log(c);
//console.log(d);

function one() {
    const username = 'Arpita'
    function two() {
        const website = 'youtube'
        //console.log(username);
    }
    //console.log(username);
   // console.log(website);
    two()
}
one()

if (true) {
    const username = 'Arpita'
    if (username === 'Arpita') {
        const website = 'youtube'
        //console.log(username + website);
    }    
    //console.log(website);
} 
//console.log(username);

//----------------interesting --------------

//addOne(5) - this kind of function declaration can allow execution before function like this
function addOne(num) {
    return num + 1
}
addOne(5)

//addTwo(4) - not work if the execution happens before function like below
const addTwo = function (num) {
    return num + 1
}
addTwo(4)