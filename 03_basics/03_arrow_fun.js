const user={
    username:'vishal',
    price:99,
    welcomeMsg: function(){
        console.log(`${this.username}, welcome to this website`)
        console.log(this) //here this  keyword will tell about the context we are dealing with
    },
        
}
// user.welcomeMsg()
// user.username='david'
// user.welcomeMsg()
// console.log(this) // here this keyword tell about gobal scope

//. Function Declaration (non-strict mode)
function showThis() {
    console.log(this);
}
showThis(); // In browsers, this will log: `window` (global object)
// In non-strict mode, this in a regular function refers to the global object (window in browsers, global in Node.js).

// In strict mode, this will be undefined.


// arrow function

const chai= ()=>{
    let username='vishal'
    console.log(this.username)
}
chai()

const obj = {
    name: "Vishal",
    greet() {
        const inner = () => {
            console.log(this.name);
        };
        inner();
    }
};
obj.greet(); // Output: "Vishal"

//Arrow functions don’t have their own this — they capture it from the surrounding lexical context.

//const addTwo= (num1,num2)=>{
//   return num1+num2 // when we use culry braces then we need to write return keyword(explicit return)
//}

const addTwo= (num1,num2)=> (num1+num2)
     // when we use paranthesis then we donot need to write return keyword(implicit return)
console.log(addTwo(3,4))


