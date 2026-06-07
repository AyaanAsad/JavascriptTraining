const num =400
console.log(num)

const balance = new Number(500)
console.log(balance)

const str = balance.toString()
console.log("Number of digits: "+ str.length)
console.log(balance.toFixed(3))

const precision = 47**(1/2)
console.log(precision.toPrecision(5)) //RETURNS A STRING

const money = 10000000000
console.log(money.toLocaleString("en-IN"))

//------------------------------------------MATHS-----------------------------------------------

console.log(Math.random())
console.log((Math.random()*10)+1)
console.log(Math.floor((Math.random()*10)+1))
console.log(Math.ceil((Math.random()*10)+1))

const min = 10
const max = 30
console.log(Math.floor(Math.random() * (max-min+1) + min))