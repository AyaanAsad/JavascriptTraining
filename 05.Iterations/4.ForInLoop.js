const MyObj = {
    name: "Ayaan",
    age: 19,
    gender: "Male"
}

for(const key in MyObj){
    console.log(`Attribute ${key} corresponds to ${MyObj[key]}`)
}

const arr=[1,2,3,4,5]

for(const ele in arr){
    console.log(arr[ele])
}

//For of loop returns values while For In loop returns keys

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }

// Can't iterate Maps using For In