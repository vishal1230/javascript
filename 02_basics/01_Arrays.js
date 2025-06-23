const score=[1,2,3,4,5]
const friends=['vishal','sachin','yashraj']

const myArr=new Array(1,2,4,5)
console.log(myArr)

myArr.push(8) // add elements in the last of the array
myArr.pop() //  remove elements from the last of the array

myArr.unshift(9) // adds element to the start of the array
myArr.shift() // removes element from start of the array

console.log(myArr.includes(4))
console.log(myArr.indexOf(4))

const newArr= myArr.join() // join will create array into string with comma seprated
console.log(myArr)
console.log(newArr)

// Slice and Splice 

console.log(myArr.slice(1,3)) // Slice will print the array from starting point excluding end point
console.log(myArr) // it not change the original array

console.log(myArr.splice(1,3))// Splice will print the array from 
// starting point to ending point point including
console.log(myArr)//it will chnage the original array