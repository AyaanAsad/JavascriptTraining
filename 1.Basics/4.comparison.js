console.log("2" > 1) //true
console.log("02" > 1) //true

console.log(null > 0) //false
console.log(null == 0) //false
console.log(null >= 0) //true

// compare anything with undefined and you will get false only
// avoid comaparisons with null and undefined

console.log("2" == 2) //true
console.log("2" === 2) //false