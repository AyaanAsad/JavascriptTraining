//NORMAL FOR LOOP:
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best number");
    }
    console.log(element);
}

//NESTED FOR LOOP:
for (let i = 1; i <= 5; i++) {
    console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 3; j++) {
    console.log(`Inner loop value ${j} and inner loop ${i}`);
    console.log(i + '*' + j + ' = ' + i*j );
   }
}

//PRINTING AN ARRAY:
const arr=[67,68,43,56,78]
for(let i = 0; i<arr.length; i++){
    let element = arr[i]
    console.log(element)
}

//--------------------------------BREAK AND CONTINUE-------------------------------------

//BREAK:
for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected 5`);
        break
    }
   console.log(`Value of i is ${i}`); // wont run if break is called before  
}

//CONTINUE:
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`); //after continue, loop jumps back to line 38 instead of executing line by line
}