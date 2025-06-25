//IMMEDIATLY INVOKED FUNCTION EXPRESSION (IIFE)

// named iife
(function chai(){
    console.log("BD CONNECTED")
})(); // semi colon is used to create next iife function if we miss semi colon next iife will not execute


//unnamed iife
((name)=>{
    console.log(`DB CONNECTED TWO ${name}`)
})('vishal')
