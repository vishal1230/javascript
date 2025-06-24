function myName(){
    console.log('V')
    console.log('I')
    console.log('S')
    console.log('H')
    console.log('A')
    console.log('L')
}

myName()

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2)
// }
// addTwoNumbers(3,5)

 function addTwoNumbers(num1,num2){ //at the time of function declration we pass parameter to the function
     num3=num1+num2
     return num3
 }

 const result=addTwoNumbers(3,5) // at he time of calling a function we pass argument to the function
 console.log(result)

 function hello_user(username){
     if(username===undefined){
         console.log(`hello ${username} how are u`)
         return
    }
     return (`hello ${username} how are u`)
 }
 
 const hey=hello_user("vishal")
 console.log(hey)
 
// function hello_user(username){
//     if(!username){
//         console.log(`hello ${username} how are u`)
//         return
//     }
//     return (`hello ${username} how are u`)
// }


function CalculateCartPrice(val1,val2,...num){  // here ... is rest operator which 
// takes all values leaving only val1, val2
    return [val1,val2,num]
}
console.log(CalculateCartPrice(100,200,300,400))

 const user={
    username:'david',
    price:122
 }

 function handle_object(any_object){
    console.log(`hey ${any_object.username} what is your bid price ${any_object.price}`)
 }
 //console.log(handle_object(user))

 handle_object({ // here we pass direct object as an argument
    username:'vis0',
    price:398
 })

 const newArray=[100,200,300,400]
  function returnSecVal(getarray){
    return getarray[1]
  }
  console.log(returnSecVal(newArray))