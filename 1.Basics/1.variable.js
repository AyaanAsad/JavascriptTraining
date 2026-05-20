const accountID = 12345 // cannot change accountID, becomes constant
let accountEmail = "ayaan.asad@gmail.com"
var accountPassword = "NiggaBoySYBAU" //prefer not to use var because of issue in block scope and functional scope
accountCity = "Kolkata"
let accountState;

console.log(accountID)
console.table([accountID,accountEmail,accountPassword,accountCity,accountState])