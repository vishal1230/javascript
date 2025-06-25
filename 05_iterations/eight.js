//The reduce() method in JavaScript is a higher-order array method 
// that executes a reducer function on each element of an array, resulting in a single output value.
//  This output value can be a number, string, object, or another array

const myNums=[1,2,3]

const newNums=myNums.reduce((acc,curval)=> acc+curval ,0)
console.log(newNums)

const anotherNums=myNums.reduce( function (acc,curval){
    return acc+curval
},0)
console.log(anotherNums)

const shoppingCart=[
    {
        itemName:'java course',
        itemPrice:2999
    },
    {
        itemName:'cpp course',
        itemPrice:3999
    },
    {
        itemName:'js course',
        itemPrice:999
    }
]

const totalPrice=shoppingCart.reduce( (acc,item)=> acc+ item.itemPrice , 0)
console.log(totalPrice)