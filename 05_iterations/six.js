// forEach donot retunr value

// filter return value

const myNums=[1,2,4,5,6,7,8,9]
const retNums=myNums.filter( (item) => item > 4)
console.log(retNums)

// const retNums=myNums.filter( (item) => {
//     return item>4 // if we use curly braces then we need to write return keyword (because it a explicit return)
// })
// console.log(retNums)

const newNums=[]
myNums.forEach( (num)=>{
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums)