let name = "Lorem   "
let sirname = "Ipsum    "
let Pokemon = ["pikachu", "squirtle", "charmander"]

let type = {
    pikachu : "electric",
    squirtle : "water",
    charmander : "fire",
    getPikachuType : function(){
        console.log(`Pikachu is ${this.pikachu} type`)
    }
}

Object.prototype.Types = function(){
    console.log("Every pokemon has a type")
}

Pokemon.Types()
name.Types()

//--------------------------------------INHERITANCE-------------------------------------------

const User = {
    name: "Lorem",
    email: "Lorem@Ipsum.com"
}
const Teacher = {
    Teach: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//---------MODERN SYNTAX---------

Object.setPrototypeOf(TeachingSupport,Teacher)
console.log(TeachingSupport.Teach)

String.prototype.trueLength = function(){
    console.log(`True Length of ${this} is ${this.trim().length}`)
}

sirname.trueLength()
name.trueLength()