const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// FALSY VALUES:
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// TRUTHY VALUES:
// "0", 'false', " ", [], {}, function(){}

//HOW TO CHECK ARRAY EMPTY ?
if(userEmail.length === 0){
    console.log("Array Empty")
}

//HOW TO CHECK OBJECT EMPTY?
const MyObj = {}

if(Object.keys(MyObj).length === 0){
    console.log("Object Empty")
}

//--------------------------------NULLISSH COALESCING OPERATOR-------------------------------------
let val1 = 5 ?? 10
let val2 = null ?? 10
let val3 = undefined ?? 15
let val4 = null ?? 10 ?? 20
console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

// Terniary Operator
// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") /*If true*/ : console.log("more than 80") /*If False*/
