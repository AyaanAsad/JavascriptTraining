// FOR OF LOOP:

const arr=[1,2,3,4,5]
for (const value of arr) {
    console.log(value)
}

const greetings = "Hello world!"
for (const character of greetings) {
    console.log(`Each char is ${character}`)
}

//MAPS:

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") // only unique values in maps
console.log(map)

for(const [key,value] of map){
    console.log(key, ":", value)
}

//How to print objects using for of:

const MyObj = {
    name: "Ayaan",
    age: 19,
    gender: "Male"
}

//Sike! Objects are not iterable in Javascript
for(const [key,value] of MyObj){
    console.log (key, ":", value)
}