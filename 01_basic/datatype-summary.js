// Primitive(these are call by value means their copy will be passed to the calling function)

// String , Number , BigInt , Symbol , Boolean , Null , Undefined
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);

let bigNumber=1325235n

// Refrence ( Non-Primitive)( these are call by reference means 
// their actual address are passed to the calling function)

// Array , Objects , Function

// Javascript is dynamically typed language because we donot need 
// to specify the datatype of decleared variable 

//their is no concept of float , decimal is treated as number

const Heros=["ironman","superman","batman"] // array

let myObj={
    name:"vishal",
    age:22
}// objects (key-value pair)

const myFun = function(){
    console.log("hello world");
    
}