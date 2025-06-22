console.log(2>1)
console.log(2<1)
console.log(2==1)
console.log(2<=1)
console.log(2!=1)


console.log("2">1)
console.log("02">1)


console.log(null>0)
console.log(null==0)
console.log(null>=0)

//the reason is that equality check == and comparison check  <,>,>= works differnetly in javascript
//comparison converts null to as zero
// that's why null>=0 is true but null==0 is false

console.log(undefined>0)
console.log(undefined==0)
console.log(undefined>=0)

// the above statememts will return false because undefined is not a number
  
// strict check ===  this will first check the datatype and then compae the value
 console.log("2"===2)
 








