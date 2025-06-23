const score=50

const balance= new Number(100)
console.log(balance)
 console.log(balance.toString().length)
 console.log(balance.toFixed(2))

const otherNum=43.5849
console.log(otherNum.toPrecision(3))

const hundreds=100000000
console.log(hundreds.toLocaleString('en-IN'))


// ++++++++++++++++ MATHS ++++++++++++++++

console.log(Math.abs(-5))
console.log(Math.round(6.4))
console.log(Math.ceil(4.3))
console.log(Math.floor(7.9))
console.log(Math.min(-5,5,3,2))
console.log(Math.max(-5,5,3,6))

console.log(Math.random())

console.log(Math.floor((Math.random()*10)) +1)

const minVal=10
const maxVal=20

console.log(Math.floor(Math.random()*(maxVal-minVal+1)) + minVal)
