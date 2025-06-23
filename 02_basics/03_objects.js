//Singleton
//create.obejct

//object literals

// if we want to add symbol in objects and wants to print as symbol in output
const mySym= Symbol('myKey1')

const jsUser={
    name:'vishal',
    age:22,
    "full_name":'vishal yadav',
    email:'vishal@12',
    city:'prayag',
    [mySym]:'myKey1' // we use square bracket to declare symbol inside objects as key
}

console.log(jsUser.email)
console.log(jsUser["email"]) // we use this notation to fetch those key value pair 
// whose key is wriiten in " " double quotes like "full name"
console.log(jsUser["full_name"])
console.log(jsUser[mySym])
console.log(jsUser)

//Object.freeze(jsUser)  ** Object.freeze() is a built-in static method
//  in JavaScript that makes an object immutable.

jsUser.greeting=function(){
    console.log("hey new user")
}

jsUser.greetingTwo=function(){
    console.log(`hello ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())