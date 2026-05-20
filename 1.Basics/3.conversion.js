let score = "6asd7"

console.log(typeof score)
console.log(typeof(score))

let ValueInNumber = Number(score)
//throws NaN if it is not purely a Number or cannot be a Number( 67 is okay but 67abc is not)

console.log(ValueInNumber)
console.log(typeof ValueInNumber)

/* "33" -> Converted
33abc -> NaN (type = Number) Not a Number
true -> 1 ; false -> 0
*/

//--------------------------------------------BOOLEAN---------------------------------------------

let isLoggedIn = 1;

let isLoggedInBool = Boolean(isLoggedIn)
console.log(isLoggedInBool);

/*
1 -> true; 0 -> false
Non empty string -> true ; Empty string -> false;
*/

//----------------------------------------------OPERATIONS-----------------------------------------

let value = 3
let negvalue = -value
console.log(negvalue);

let str1 = "Hello"
let str2 = " World"
let str3 = str1 + str2
console.log(str3)

console.log("1" + (2 + 2)) // 14
console.log("1" + "2") //12
console.log("1" + 2 + 2) //122
console.log(1 + 2 + "2") //32

console.log(+true) //1
console.log(+"") //0

let number = 10
console.log(number++) // 10
console.log(++number) // 12