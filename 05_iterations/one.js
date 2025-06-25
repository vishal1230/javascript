for (let i = 0; i < 10; i++) {
    console.log(i)
}


 let myArray=['vishal','sachin','yash']
 for (let i = 0; i < myArray.length; i++) {
     console.log(myArray[i])
 }

 // Break and Continue

 for(let i=0;i<10;i++){
    if(i==5){
        console.log('5 is detected')
        break;
    }
    console.log(`value of i, ${i}`)
 }

 for(let i=0;i<10;i++){
    if(i==5){
        console.log('5 is detected')
        continue;
    }
    console.log(`value of i, ${i}`)
 }