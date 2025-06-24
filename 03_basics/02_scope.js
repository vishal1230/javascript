//var is not block scoped

let a=100 // global scope

if(true){ // block scope
    let a=10;
    console.log('innner a', a)
    const b=20;
    var c =30
}

console.log(a)
//console.log(b)
console.log(c)


function one(){
     const username='vishal'
        function two(){
         const website='youtube'
         console.log(username) // we can acess all variable of parent function inside child function
     }
     two()
}

one()


if(true){
    const username='david'
    if(username==="david"){
        website='youtube'
        console.log(`username ${username}, website ${website}`)
    }
   // console.log(website)// it will produce an error because we try to acess website outside it scope
}
//console.log(username)//it will produce an error because we try to acess username outside it scope

//+++++++++++++++++++++ interesting++++++++++++++++++
console.log(addOne(5)) 
function addOne(num){
    return num+1
}

const funRet=function addTwo(num){
    return num+1
}
console.log(funRet(6))

// | Feature                         | `function addOne()`              | `const funRet = function addTwo()`                                               |
// | ------------------------------- | -------------------------------- | -------------------------------------------------------------------------------- |
// | **Type**                        | Function Declaration             | Function Expression                                                              |
// | **Hoisted?**                    | ✅ Yes (hoisted with full body)   | ❌ No (only variable is hoisted, not the function)                                |
// | **Can call before definition?** | ✅ Yes                            | ❌ No                                                                             |
// | **Name available outside?**     | ✅ `addOne` is globally available | ❌ `addTwo` is only available **inside** the function body; outside, use `funRet` |


// What is hoisting?
// In function declarations, JavaScript hoists the entire function to the top of the scope.

// In function expressions, only the variable (funRet) is hoisted, but it remains undefined until the assignment is made.