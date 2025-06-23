let myDate=new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate) // object

let createNewDate= new Date(2025,8,23)
console.log(createNewDate.toLocaleDateString('en-IN'))

let myTimestamp=Date.now()
console.log(myTimestamp)
console.log(createNewDate.getTime())

console.log(Math.floor(Date.now()/1000)) // like this we convert time from milisecond to second

let newDate= new Date()
console.log(newDate.getDate())
console.log(newDate.getDay())

newDate.toLocaleString('default',{
    weekday:"long"
})