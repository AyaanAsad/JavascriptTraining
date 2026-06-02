const MyNums = [1,2,3,4,5]

const initial = 0

//NORMAL FUNCTION:
const sum = MyNums.reduce( function (acc, value) {
    console.log(`Accumulator : ${acc} and CurrentVal : ${value}`)
    return acc + value
},initial)
console.log(`Final : ${sum}`)

//ARROW FUNCTION:
const sumArrow = MyNums.reduce( (acc,value) => {
    console.log(`Accumulator : ${acc} and CurrentVal : ${value}`)
    return acc + value
},initial)
console.log(`Final : ${sumArrow}`)

//SHOPPING CART EXAMPLE:
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const TotalPrice = shoppingCart.reduce( (acc, val) => {
    return acc + val.price
},initial)
console.log(TotalPrice)