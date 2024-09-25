const accountId=1144553   //cant be changed 
let accountEmail="ak038773@gmail.com"                  // it has scope only can be used within the scope
var accountPassword="12345"                            //scope issue it can be accesed and can change as it has no scope 
accountCity="lahore"                                   //memory can be reserved and the variable can be defined
let accoutState;                                       //undefined


//accountId="67890"  not allowed

accountEmail="ak03877@gmail.com"
accountPassword="78906"
accountCity="Karachi"

console.log(accountEmail);
console.table([accountId,accountEmail,accountPassword,accountCity,accoutState]);  //the other way to print the data
