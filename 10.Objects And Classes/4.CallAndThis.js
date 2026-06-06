function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username) // send execution context of createUser to SetUsername
    this.email = email
    this.password = password
}

const chai = new createUser("Lorem", "Lorem@Ipsum.com", "123")
console.log(chai);

//without explicitly using call and sending current execution context as parameter, Setusername function uses its
//own execution context, so when it is completed all the variables and properties it holds get deleted
//and createUser never really gets the username it asked for because it doesnt even exist anymore
//SetUsername did its work properly, it just could not give the results to createUser