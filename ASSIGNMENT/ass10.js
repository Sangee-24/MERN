/*1.What is JavaScript?
  Java is an dynamic and interpreted programming language which is used for creating dynamic websites.*/
  
//2.Variables and Types:
let Userage=21
let Username="Sangee"

console.log(Userage)
console.log(Username)

//3.Comments in JavaScript:
/* The given below program is used to perform 
simple mathematical operations on two numbers such as addition subraction multiplication amd division*/

//4.Operations:
let num1=39
let num2=42
console.log(num1+num2)
console.log(num1-num2)
console.log(num1*num2)
console.log(num1/num2)

//5.Data Types:
let num=42 //used to store numbers 
let bool=true //boolean values either true or false
let s="sangee" //string is used to store a sequence of characters 
let n=[10,20,30] //array is used tostore multiple values in a single variable
console.log(num,bool,s,n)

//6.Functions in JavaScript:
function greetUser(name){
    console.log(name)
}
greetUser("Sangeerani")//arguments

//7.if Else in JavaScript:
temperature=42
if (temperature>30){
    console.log("Temperature is greater than 30")
}
else{
    console.log("Temperature is less than 30")
}

//8.FOR LOOP:
for(let i=1;i<=5;i++)
{
    console.log(i)
}
 //9.Loose and Strict equality

 console.log(5 === "5"); // false (number !== string)
 console.log(5 == "5"); // true (string "5" is converted to number 5)
 
 /*Loose Equality (==) : Performs type coercion 
 Strict Equality (===) :Does NOT perform type coercion.
*/