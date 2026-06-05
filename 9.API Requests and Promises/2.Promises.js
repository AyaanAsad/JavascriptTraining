//Promise is an object that represents eventual completion

const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    //DB Calls
    //Cryptography
    //Network calls
    setTimeout(function () {
        console.log('Async task completed')
        resolve() // When take is completed call resolve method which connected to then()
    }, 2000)
})
promiseOne.then(function () {
    console.log('Promise consumed')
})


new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task 2 completed')
        resolve()
    }, 3000)
}).then(function () {
    console.log('second promise consumed')
})


const PromiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({
            username: "Lorem",
            email: "Lorem@Ipsum"
        }) //pass object to then()
    }, 4000)
})
PromiseThree.then(function (user) {
    console.log(user)
})


const PromiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({
                username: 'Lorem',
                password: '123'
            })
        }
        else {
            reject('Error Something went wrong') // connects with catch block and sends message
        }
    }, 5000)
})
PromiseFour.then((user) => {
    return user.username
}).then((username) => {
    console.log(`Username printed through chaining is: ${username}`)
}).catch((err) => {
    console.log(err)
}).finally(() => {
    console.log('Promise 4 Over')
})


const PromiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({
                username: 'javaScriptm',
                password: '123'
            })
        }
        else {
            reject('Javascript not running') // connects with catch block and sends message
        }
    }, 6000)
})
async function consumePromiseFive() {
    try {
        const response = await PromiseFive // this is an object (of course)
        console.log(response)
    }
    catch (error) {
        console.log(error)
    }
}
consumePromiseFive()

// async function getAllUsers(){
//     try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data)
//     } catch(error){
//         console.log(error)
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) => {
    return response.json()
}).then( (data) => {
    console.log(data)
})
.catch( (err) => {
    console.log(err)
})