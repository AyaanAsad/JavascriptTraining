class User {
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPass(){
        return `${this.password}abc`
    }

    toUpperCase(){
        return `${this.username.toUpperCase()}`
    }
}

const newUser = new User("Lorem","Lorem@Ipsum.com",452)
console.log(newUser)
console.log(newUser.encryptPass())
console.log(newUser.toUpperCase())

//----What actually happens:---------

function User1(username,email,password){
    this.username=username
    this.email=email
    this.password=password
}
User1.prototype.encryptPass = function(){
    return `${this.password}abc`
}
User1.prototype.toUpperCase = function(){
    return `${this.username.toUpperCase()}`
}

const newUser2 = new User1("Ayaan","Ayaan@Gmail.com",980)
console.log(newUser2)
console.log(newUser2.encryptPass())
console.log(newUser2.toUpperCase())
