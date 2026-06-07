//-----------------------------------LITERALS (NON SINGLETON)-----------------------------------

const mysymbol = Symbol("Key")

const JSUser = {
    name : "Hitesh",
    "Full Name" : "Ayaan Asad",
    [mysymbol] : "KEYKEYDOULOVEME",
    //doing mysymbol : key 1 will treat it as a string and not symbol
    age : 18,
    gender : "male"
}

console.log(JSUser["name"]) //using "" cuz string type
console.log(JSUser["Full Name"])
console.log(JSUser[mysymbol])

//Object.freeze(JSUser) // sets object to const basically, cannot change anything inside of the object
console.log(JSUser)

JSUser.greeting = function() {
    console.log("Hello JS USer")
}
JSUser.greeting2 = function() {
    console.log(`Hello JS User, ${this["Full Name"]}`)
}

console.log(JSUser.greeting2())