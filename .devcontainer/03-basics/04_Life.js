// Immediately Invoke Function Expressions (IIFE)

(function chai() {  //named IIFE
    //console.log(`DB CONNECTED`);
})();               //semicolon mandatory here to end the scope

//we can use 2 IIFE by using semicolon in between 

( (name) => {       //simple IIFE
    //console.log(`DB CONNECTED TWO ${name}`);
})('Arpita');       //parameter pass 

( (surname) => {
    console.log(`DB CONNECTED Three ${surname}`);
})('panda');       