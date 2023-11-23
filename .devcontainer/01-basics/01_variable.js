const accountId=3243546;
let email="arpita@gmail.com"
var accountPassword="3435476" //prefer not to use var because of issue of block and functional scope
accountCity="bangalore" //you can use this kind of variable as well ...but not suggest to do that (not safe)
let accountState;
//accountId=3//not allow for const variable

email="panda@gmail.com"

accountPassword="543654765"

accountCity="odisha"

//console.log(accountId)
//console.log(email)
//console.log(accountPassword)
//console.log(accountCity)

console.table([accountId, email, accountPassword, accountCity, accountState])