const name = "Ayaan"
const sirname = "Asad"

console.log(`Hello my name is ${name} ${sirname} `)

//ANOTHER WAY, THIS WAY WE GET ACESS TO STRING METHODS
const shortname = new String("BarunDinayTas")
console.log(shortname[0])
console.log(shortname.__proto__)
console.log(shortname.length)
console.log(shortname.toUpperCase())
console.log(shortname.slice(-12,4))

const trimmer = "     Ayaan   "
console.log(trimmer)
console.log(trimmer.trim())

const url = "https://Tarun%20Tingu%20Mingu"
console.log(url.replaceAll("%20","-"))
console.log(url.includes("Tarun")) //Case sensitive
console.log(url.split("%20"))
