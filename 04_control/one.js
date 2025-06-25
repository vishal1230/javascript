const temp=110
if(temp == 90){
    console.log('temp is equal to 90')
}else{
    console.log('temp is not equal to 90')
}

const bal=1000
if(bal>500) console.log('bal is more than 500') // this is used to execute sigle line , 
// we can use this style to execute more than one line by apllying comma between them
// but it is not advisble to do so

const marks=50
if(marks>50){
    console.log('marks is greater than 50')
}else if(marks== 50){
    console.log('marks is equal to 50')
}else{
    console.log('marks is less than 50')
}

const userLog=true
const debitCard=true

if(userLog && debitCard){
    console.log(' user can buy courses')
}else{
    console.log('user cannot buy courses')
}

const logEmail=true
const logGoogle=false

if(logEmail || logGoogle){
    console.log('login sucessful')
}else{
    console.log('invalid credentials')
}