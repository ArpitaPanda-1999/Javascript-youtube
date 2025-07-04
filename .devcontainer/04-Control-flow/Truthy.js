const userEmail = ''
if (userEmail) {
    //console.log('got user email');
} else {
    //console.log("don't have user email");
}

const userEmail1 = 'email'
if (userEmail1) {
    //console.log('got user email');
} else {
    //console.log("don't have user email");
}

//falsy values

//false, 0, -0, BigInt 0n, "", null, undefine, NaN

//truthy values

//"0", 'false', "  ", {}, [], function(){}

if (userEmail.length === 0) {
    //console.log('Array is empty');
}


const emptyObj = {}
 if (Object.keys(emptyObj.length ===0)) {
    //console.log('Object is empty');
 }


 //Nullish coalescing operator (??): null ,undefined
 let val1;
 //val1 = 5 ?? 10  //ans- 5 => first priority
 //val1 = null ?? 10 //ans- 10 => because null it shifted the value 
 //val1 = undefined ?? 15 //ans- 15 => because undefined it shifted the value
 val1 = null ?? 10 ?? 20
 
 //console.log(val1);


//Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 180 ? console.log(true) : console.log(false);

const iceTeaPrice1 = 100
iceTeaPrice1 <= 80 ? console.log(true) : console.log(false);

