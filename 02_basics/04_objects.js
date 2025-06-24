//We use constructor to make singleton object

const tinderUser=new Object()
tinderUser.name='vishal'
tinderUser.email='vis@13'
tinderUser.id=1234
console.log(tinderUser)

const anotherUser={
    email:'vik@123',
    fullname:{
        Username:{
            first_name:'rishu',
            last_name:'pan'
        }
    }
}
console.log(anotherUser.fullname.Username.first_name)


const obj1={1:'a',2:'b'}
const obj2={3:'a',4:'b'}
const obj3={5:'a',6:'b'}

const obj4={obj1,obj2,obj3} // this statement will group all objects into nested form inside a single object
//console.log(obj4)

const obj5=Object.assign({},obj1,obj2,obj3) // this object.assign will take two parameter
//  one is target(target is optional) and other is source
//console.log(obj5)

const obj6={...obj1,...obj2,...obj3} // ... is spread operator
console.log(obj6)

console.log(Object.values(tinderUser)) // it will return values of objects in form of array
console.log(Object.keys(tinderUser)) // it will return keys of objects in form of array
console.log(Object.entries(tinderUser)) // it will return key-value pair of 
// object comma seperatd in form of  nested array

console.log(tinderUser.hasOwnProperty('islooged'))

// destructuring of Objects

const course={
    courseName:'javascript',
    price:'4225',
    tutor:'Vishal'
}

const {tutor}=course // here we destructure the tutor in course 
// whenver we want to fetch tutor we donot need to write course.tutor , 
// only tutor do the same thing after deesturcturing
console.log(tutor)

const {tutor : teacher}=course // using desturcturing we can change the name of property 
console.log(teacher)

// JSON (javascript object notation) in this keys are written in string format
// {
//     'name':'vishal',
//     'age':22,
//     'email:'vis@124'
// }

// JSON is also in form of array of objects
// [
//     {},
//     {},
//     {}
// ]