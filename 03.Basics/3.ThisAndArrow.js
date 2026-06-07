const user = {
    username: "Lorem Ipsum",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this); // empty object as node environment

//-----------------------------THIS IN FUNCTIONS------------------------------------

function test(){
    let username = "Lorem Ipsum"
    console.log(this.username) // undefined as this keyword only available for ojects
}
test()

//ARROW FUNCTIONS:

const arrow = () => {
    let username = "Lorem Ipsum"
    console.log(this.username); //Still wont work lol
}

const explicit_return = (num1,num2) => {
    return num1 + num2
}
console.log(explicit_return(5,5))

const implicit_return = (num1,num2) => (num1 + num2)
console.log(implicit_return(1,2))