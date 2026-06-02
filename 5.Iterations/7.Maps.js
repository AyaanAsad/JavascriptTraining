const MyNums = [1,2,3,4,5,6,7,8,9,10]

const newNum = MyNums.map( (num) => num + 10 )
console.log(newNum)

//CHAINING :

const newNums = MyNums
                .map( (num) => num*10 )
                .map( (num) => num+1 )
                .filter( (num) => num < 50 )

console.log(newNums);
