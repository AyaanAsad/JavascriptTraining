const arr = [1,2,3,4,5]
console.log(arr[0]) 

const arr2 = new Array("nigga", "wigga", "chigga")
console.log(arr2)

//-------------------------------------METHODS-----------------------------------------------------
arr.push(7) // insert at start
arr.push(10)
arr.pop() // delete form end    
console.log(arr)

arr.unshift(0) // insert at start
console.log(arr)
arr.shift()
console.log(arr)

const joinedarr = arr.join()
console.log(joinedarr)

const splicedarr = arr.splice(0,3) // splices the actual array as well
console.log(arr); // 457
console.log(splicedarr); // 123

const slicedarr = arr.slice(0,2) // does not modify new array copies it into new array
console.log(arr) // 457
console.log(slicedarr) //45
