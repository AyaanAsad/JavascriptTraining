const male = ["chotu", "tarun", "bittu"]
const female = ["keerthi", "chikki", "gudia"]

male.push(female) //wrong, pushes array into array
//instead use : 
const siblings = male.concat(female)
//or use spreaad
const siblings2 = [...male, ...female]
//console.log(siblings2)

const messedUpArray = [0,1,[2,3],4,5,6,[7,8,[9,10]]]
const NotSoMessedUpArray = messedUpArray.flat(3) //depth (give infinity if you dont know)
console.log(NotSoMessedUpArray)

console.log(Array.isArray("Ayaan"))
console.log(Array.from("Ayaan")) // converts to array
console.log(Array.from({name:"Ayaan"})) // Special case, wont convert to array, have to specify key or non key

let score1 = 100
let score2 = 500
let score3 = 1000
console.log(Array.of(score1,score2,score3))
console.log(Array.of({name:"Ayaan"})) // this works but a little weird

