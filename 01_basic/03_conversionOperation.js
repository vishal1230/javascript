let score = "45"
//console.log(typeof score);

let valueInNumber= Number(score)
// console.log(valueInNumber);
// console.log(typeof valueInNumber);

//"45" -> 45
//"45abc" ->NaN
//true -> 1, false-> 0

let isLoggedIn=1;
let booleanisLoggedIn= Boolean(isLoggedIn)
// console.log(booleanisLoggedIn);
// console.log(typeof booleanisLoggedIn);

// 1->true, 0->false
// "" -> empty string to false
// "vishal"-> string to true

let someNumber=67
let StringsomeNumber=String(someNumber)
// console.log(StringsomeNumber);
// console.log(typeof StringsomeNumber);

/***************************************OPERATIONS ******************************/

let value=5
let negValue=-value;
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);->power of operator
// console.log(2/2);
// console.log(2%2);-> modulo operator


let str1="vishal"
let str2="yadav"
let str3= str1+str2
console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");//-> if we encounter first operand as number than it will add 
// with other number and if string is present then it will treat as string.

console.log((2+3)*6/5);// to get rid of this tricky statement we use paranthesis.

console.log(+true)
console.log(+"")

let gamecounter=100;
++ gamecounter; // prefix operator The value of the variable is 
// incremented/decremented before the variable's value is used in any expression or statement. 
//The expression's result is the new, updated value of the variable. 
console.log(gamecounter);
gamecounter++;// postfix operator The value of the variable 
// is incremented/decremented after the variable's value is used in any expression or statement. 
//The expression's result is the original value of the variable before it was incremented/decremented. 
console.log(gamecounter);


