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


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory is of two type Stack and Heap
// Stack (stores Primitive datatype {copy is passed , call by value})
// Heap(stores Non-Primitive datatype {address is passed , call by refrence})

let myName="vishal"
let anotherName=myName;
anotherName="David"
console.log(myName);
console.log(anotherName);

let myAccount={
    email:"vishal@123",
    Password:1234
}

let anotherAccount=myAccount
anotherAccount.email="david@123"

console.log(myAccount.email);
console.log(anotherAccount.email);

