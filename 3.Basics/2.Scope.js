let a = 300
var c = 100
if(true){
    let a = 30
    const b = 20
    var c = 10
    console.log("Inner let: ", a)
    console.log("Inner var: ", c)
}

console.log("Outer let: ", a)
console.log("Outer var: ",c)

//Do not use var because golbal scope and block scope for var is shared (or same)