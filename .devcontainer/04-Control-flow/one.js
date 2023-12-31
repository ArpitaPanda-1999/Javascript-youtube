//if
const isUserLoggedIn = true
const temperature = 41

if ( temperature < 50 ) {  
    //console.log('Less than 50');
}
//console.log('temperature is greater than 50');

if ( temperature < 50 ) {  
    //console.log('Less than 50');
}
else{
    //console.log('temperature is greater than 50');   
}
//console.log('Executed');

if ( 2 != 3 ) {  
    //console.log('Executed');
}
else{
    //console.log('mission failed');
}

if ( 2 == "2" ) {  //double equal check same content or not
    //console.log('Executed');
}

if ( 2 === "2" ) {  //thiple equal check type of given content
    //console.log('executed');
}
else{
    //console.log('mission failed');
}

const score = 200

if (score > 100) {
    const power = 'fly'//if we use "var" in this place it will not give u any error because "var" is a global variable but it may cause issue later processes
    //console.log(`user power: ${power}`);
}

//console.log(`user power: ${power}`);//definitely give an error because power can't asscess outside of the block


const balance = 1000

//if( balance > 500 ) console.log('test');//implicit scope

//if( balance > 500 ) console.log('test'), console.log('test2');// this will work but not a good practice

if (balance < 500) {
    console.log('less than 500');
}
else if (balance < 750) {
    console.log('less than 750');
}
else if(balance < 900){
    console.log('less than 900');
}
else{
    console.log('less than 1200');
}