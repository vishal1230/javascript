const marvel_heros=['thor','ironman','spiderman']
const dc_heros=['superman','batman','flash']
marvel_heros.push(dc_heros) // push will add dc_heros array as a single element in marvel_heros
console.log(marvel_heros)
console.log(marvel_heros[3][2])

const all_heros=marvel_heros.concat(dc_heros)// concate will create a new array
console.log(all_heros)

const all_merge_heros=[...marvel_heros,...dc_heros] // The spread syntax (...) in JavaScript allows
//  an iterable, such as an array, to be expanded into individual elements.
//  This is particularly useful in several scenarios involving arrays: Creating Shallow Copies. 
console.log(all_merge_heros)

// Shallow copy vs Deep copy
//A shallow copy creates a new object that shares references to the same nested objects as the original,
//  while a deep copy creates a completely independent copy, including duplicating all nested objects. 


const another_Arr=[1,2,[3,4],5,[6,[7,8]]]
const useable_another_Arr=another_Arr.flat(Infinity) // In JavaScript, "flattening an array" 
// refers to the process of transforming a nested array (an array containing other arrays as its elements) into a single-dimensional array,
//  where all sub-array elements are concatenated into the main array.
console.log(useable_another_Arr)

console.log(Array.isArray('vishal'))
console.log(Array.from('vishal'))// in JavaScript, Array.from() is a static method used to create a new, 
// shallow-copied Array instance from an array-like or iterable object.
console.log(Array.from({name:"vishal"}))// it will give an empty array because
//  here we need to specify the formation of array using key or value

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))