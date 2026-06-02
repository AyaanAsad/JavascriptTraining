const number = [10,11,12,13,14,15]

number.forEach( function (element) { 
   console.log(element+1) 
})

number.forEach( (element) => {
    console.log(element-1)
})

//Can also do this:

const printer = (element) => {
    console.log(element)
}

number.forEach(printer)

const ArrOfObj = [
    {
        nickname: "Bittu",
        name: "Ayaan"
    },
    {
        nickname: "Linga",
        name: "Hitesh"
    },
    {
        nickname: "Mickey",
        name: "Subhangi"
    }
]

ArrOfObj.forEach( (object) => {
    console.log(object)
    console.log(object.name)
})