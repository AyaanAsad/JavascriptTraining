const pi = Object.getOwnPropertyDescriptor(Math,'PI')
console.log(pi)

//As writable is false, value of math.pi can never be changed no matter what

//----------------------------------ALTERING PROPERTIES:----------------------------------------

const User = {
    name: "lorem",
    email: "lorem@ipsum.com",
    password: 123,

    printName: function(){
        console.log(`User is ${this.name}`)
    }
}

const UserProps = Object.getOwnPropertyDescriptor(User,'name')
console.log(UserProps)

//changing writable property:

console.log(`Before chaniging name : ${User.name}`)

Object.defineProperty(User,'name',{
    writable:false
})

User.name='Ipsum'
console.log(`After chaniging name : ${User.name}`) //Still lorem

//changing enumerable property:

console.log(`Before chaning enumerable property:`)

for( let [key,value] of Object.entries(User)){
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }
}

Object.defineProperty(User,'name',{
    enumerable:false
})

console.log(`After chaning enumerable property:`)

for( let [key,value] of Object.entries(User)){
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }
}


