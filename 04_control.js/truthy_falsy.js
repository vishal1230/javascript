// falsy values
// false , 0 , -0 , bigint 0n , ""(empty string) , null , undefined , NaN

// truthy values
// true , '0' , 'false' , " " , [] , {} , function(){}

const userEmail="vishal@12223"
if(userEmail){
    console.log("user email is present")
}else{
    console.log("email is not presert")
}

const email=[]
if(email.length ===0){
    console.log('array is empty')
}

const emailId={}
if(Object.keys(emailId).length===0){
    console.log('object is empty')
}

// Nullish Coalescing operator (??)
//The Nullish Coalescing operator (??) in JavaScript is a logical operator that provides a default
//  value for an expression if the left-hand side operand is null or undefined.
//  It returns the right-hand side operand only when the left-hand side operand is 
// explicitly null or undefined. 

let val;
//val=5??10
val=null??10 // if null is present as first value then it move to next value
//val=null??10??20
console.log(val)

// Terniary Operator(?)
// condition ? true:false
const temp=100
temp > 100 ?console.log('temp is more than 100'):console.log('temp is less than 100')