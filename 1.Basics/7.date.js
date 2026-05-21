let mydate = new Date()
console.log(mydate.toString());

let myCreatedDate = new Date(2026, 5, 13)
console.log(myCreatedDate.toLocaleString("en-IN"))

let newDate = new Date("05-21-2026")
console.log(newDate.toLocaleDateString())

let TimeStamp = Date.now()
console.log(TimeStamp)
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))

console.log(`${mydate.getDay()} and the time`)
console.log("Buddhist: "+ mydate.toLocaleDateString('default',{
    calendar: "buddhist"
}))
console.log("Chinese: "+ mydate.toLocaleDateString('default',{
    calendar: "chinese"
}))
console.log("Persian: "+ mydate.toLocaleDateString('default',{
    calendar: "persian"
}))
console.log("Hebrew: "+ mydate.toLocaleDateString('default',{
    calendar: "hebrew"
}))
console.log("Islamic: "+ mydate.toLocaleDateString('default',{
    calendar: "islamic"
}))
console.log("Japanese: "+ mydate.toLocaleDateString('default',{
    calendar: "japanese"
}))
console.log("gregory: "+ mydate.toLocaleDateString('default',{
    calendar: "gregory"
}))