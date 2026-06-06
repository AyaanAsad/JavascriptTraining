class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const Teach = new Teacher("Ayaan", "Ayaan@teacher.com", "123")
Teach.logMe()

const Student = new User("Stud")
Student.logMe()

console.log(Teach instanceof User);