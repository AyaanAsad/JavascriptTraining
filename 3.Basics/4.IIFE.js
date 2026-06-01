(function iife(){
    //named iife
    console.log("DB CONNECTED")
})();
// To immediately invoke the function and prevent it from getting polluted from variables in the global scope we use IIFE
// Immediately Invoked Function Execution
// Semicolon is mandatory in this case to specify to the compiler that the IIFE is completed

((name /*parameter*/) => {
    //unnamed iife
   console.log(`SECOND DB CONNECTED FOR ${name}`) 
})("Ayaan" /*Value*/);

