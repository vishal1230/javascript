// forEach

const coding=['js','cpp','java','ruby']
coding.forEach( function (val) {
    console.log(val)
})

coding.forEach( (item)=>{
    console.log(item)
})

function printMe(value){
    console.log(value)
}

coding.forEach(printMe)

coding.forEach( (item,index,arr)=>{
    console.log(item,index,arr)
})

const myCoding=[
    {
        language:'cpp'
    },
    {
        language:"python"
    },
    {
        language:'java'
    }
]
 
myCoding.forEach( (item)=>{
    console.log(item.language)
})