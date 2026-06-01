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

//-----------------------------------NESTED FUNCTIONS--------------------------------------------

function parent(){
    const name = "Lorem"
    function child(){
        const school  = "Ipsum"
        console.log(name) // Will print as block scope of parent() is golbal scope of child()
    }
    //console.log(school) <- Wont print as school is in block scope of child(), parent cannnot access child variables, vice versa is true
    child()
}
parent()


if (true) {
    const username = "Lorem"
    if (username === "Lorem") {
        const website = " Ipsum"
        console.log(username + website);
    }
    // console.log(website); <- Error for obvious reasons
}
// console.log(username); <- Same here

//-----------------------------RANDOM MINI HOISTING EXAMPLE------------------------------------

console.log(addone(5)) // Will work as the function is not store in a variable and is declared independently 
function addone(num){
    return num + 1
}

addTwo(5) // Will not work as function is in a variable which is defined after the this line
const addTwo = function(num){
    return num + 2
}