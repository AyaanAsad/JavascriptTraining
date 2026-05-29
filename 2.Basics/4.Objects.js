// const  User = new Object()
const  User = {}

 User.id = "123abc"
 User.name = "Sammy"
 User.isLoggedIn = false

console.log( User);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Tingu",
            lastname: "mingu"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = { obj1, obj2 }
//const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
console.log(obj3);


const NewUsers = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

NewUsers[1].email
console.log( User);

console.log(Object.keys( User));
console.log(Object.values( User));
console.log(Object.entries( User));

console.log( User.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "Maths",
    price: "999",
    courseInstructor: "Nigger"
}

course.courseInstructor

const {courseInstructor: instructor} = course

//console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "Nigger",
//     "coursename": "Maths",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]
