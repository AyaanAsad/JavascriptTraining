class User {
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }

    get password(){
        return `${Math.round(Math.random()*100)}${this._password}${Math.round(Math.random()*100)}`
    }

    set password(value){
        return this._password = value
    }
}

const Lorem = new User("Lorem", "Lorem@Ipsum.com", 123)
console.log(Lorem.password)

//----------------------------OLD FUNCTION BASED SYNTAX--------------------------------------

function pokemon (name, type) {
    this._name = name
    this._type = type

    Object.defineProperty(this, 'name', {
        get: function(){
            return this._name.toUpperCase()
        },
        set: function(value){
            this._name = value
        }
    })
}

const Pok = new pokemon("pikachu","electric")
console.log(Pok.name)