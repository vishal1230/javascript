const name="vishal"
const repoCount=50

console.log(name+repoCount);

// the above string concatnation is old way of doing that

// the new way of string concatination is string interpolation

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gamename= new String("vishal-yd-com") // here we use string class constructor to declare a string
console.log(gamename[0])

console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2))
console.log(gamename.indexOf('i'))


const newString=gamename.substring(0,4)
console.log(newString)
const anotherString=(gamename.slice(-13,4))
console.log(anotherString)

const newStringOne="   vishal  "
console.log(newStringOne.trim()) // trim remove the starting and trailing whitespaces or end line characters

const url="https//vishal.com/vishal%40yadav"
console.log(url.replace('%40','-'))

console.log(url.includes("david"))

console.log(gamename.split('-'))


