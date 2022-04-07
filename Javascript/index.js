//1-Ways to print in javascript
// console.log
// alert(me)
// document.write


//2-Javascript console Api ----Single line comment
console.log("Hello World", 4 + 6, "Another log");
document.write("This is document");
console.warn("This is warning");
console.error("This is an error");


/*Multi line comment*/

//3-<!-- javascript variables -->
// <!-- What are varibales---Container to store data values -->
var number1 = 34;
var number2 = 56;
// console.log(number1 + number2);

// 4-Datatypes in Javascript

// number
var number1 = 455;
var num2 = 56.76;

// string
var str1 = "This is a string";
var str2 = "This is also string";

// Objects
var marks = {
    Ursa: 100,
    Loviza: 99,
}
// console.log(marks);

// Boolean
var a = true;
var b = false;
// console.log(a);

// var und = undefined
var und;
// console.log(und);

// Null
var n = null;
// console.log(n);


/*At a very high level, there are two types of data types in javascript
1-Primitive data types: Undefine,null,number,string,boolean,symbol
2-Reference data types: objects,Arrays
*/

// Arrays
var arr = [1, 2, 3, 4, 5]
// console.log(arr)


// 5-Operators in javascript
//Arithematic Operators

//     var a = 100;
//     var b = 10;
//     console.log("The value of a + b is", a+b);
//     console.log("The value of a - b is", a-b);
//     console.log("The value of a * b is", a*b);
//     console.log("The value of a / b is", a/b);

//     Assignment Operators
var c = b;
//    c += 2;
//    c -= 2;
//    c *= 2;
//    c /= 2;
//    console.log(c);


//    Comparison Operators
//   var x = 34;
//   var y = 56;
//   console.log(x==y);
//   console.log(x>=y);
//   console.log(x<=y);
//   console.log(x<y);
//   console.log(x>=y);


//    Logical Operators

//    logical and operators
//   console.log(true && true);
//   console.log(true && false);
//   console.log(false && true);
//   console.log(false && false);

//   logical or operators

// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);


// logical not operators

// console.log(!true );
// console.log(!false);

// ------------------------------------------

// 6-FUNCTIONS

// function avg(a, b){
// c = (a + b)/2;
// return c;
// }
// c1 = avg(4, 6);
// c2 = avg(14,  16);
// console.log(c1, c2);
// --------------------------------------

// 7-Conditionals in Javascript

// var age = 21;
// if(age>20){
//   console.log("You are not a kid");
// }

// else{
//    console.log("You are kid");
// }

// marks = 95;
// if(marks>90){
//    console.log("Grade A+");
// }
// else if(marks>80){
//    console.log("Grade A");
// }
// else if(marks>70){
//    console.log("Grade B+");
// }
// else{
//    console.log("Pass");
// }
// ------------------------------------------------

// 8-LOOPS
//     for loop

// var arr = [1,2,3,4,5,6,7,8]
// for(i=0; i<arr.length; i++){
//    console.log(arr[i]);
// }

// foreach loop
// arr.forEach(function(element){
//    console.log(element)
// })


// while loop
let j = 0;
// while(j<arr.length){
//  console.log(arr[j])
//  j++;
// }

// do while loop
// do{
//  console.log(arr[j]);
//    j++;
// } while (j < arr.length);


// Break & Continue
// var arr = [1,2,3,4,5,6,7,8]
// for(i=0; i<arr.length; i++){
//  if(i==2){
// //  break;
// continue;
//  }
//    console.log(arr[i]);
// }
// ----------------------------------------------

// Array Methods
let myArr = ["Fan", "Camera", 34, null, true];

console.log(myArr.length);
myArr.pop();  /*last word delete8*/
myArr.push("Ursa");  /*last word add*/
myArr.shift();  /*first element delete*/
myArr.unshift("Loviza");

console.log(myArr);

// 6-Concat() Method
// Input  ['Fan', 'Camera', 34, null, true, 'Emil', 'Tobias', 'Linus']
let arr1 = ["Fan", "Camera", 34, null, true];
let arr2 = ["Emil", "Tobias", "Linus"];
const name = arr1.concat(arr2);
console.log(name);

// 7-Join() Method
//    Input (Apple/Orange/Mango/Cheery)
let fruit = ["Apple", "Orange", "Mango", "Cheery"];
let text = fruit.join("/");
console.log(text);


// 8-Slice() Method  (String k part ko exract krk deta h)
//   Input ['Orange', 'Mango']
let fruits = ["Apple", "Orange", "Mango", "Cheery"];
let slice = fruits.slice(1, 3);
console.log(slice);


// 9-indexOf() Method  (indexOf() returns the position of a specified value in an array:)
//   Input [2]
let string = ["Apple", "Orange", "Mango", "Cheery"];
let str = string.indexOf("Mango");
console.log(str);


// 10-includes() Method  (returns true if an array contains a specified element:)
//   Input [true]
let strings = ["Apple", "Orange", "Mango", "Cheery"];
let include = strings.includes("Mango");
console.log(include);

// 11-find() Method  (returns the value of the first element in an array that passes a test (provided by a function):)
 //   Input [20]
const ages = [3 , 10 , 18 ,20];
 const age = ages.find(checkAge);
 function checkAge(age){
     return age > 18;
 }
 console.log(age);


 // 12-findIndex() Method  ( returns the index of the first element that passes a test (provided by a function).)
 //   Input [3]
const ageindex = [3 , 10 , 18 ,20];
const index = ages.findIndex(checkAge);
function checkAge(age){
    return age > 18;
}
console.log(index);

// 13-map() Method  ( The Array.map() method creates a new array from the results of calling a function for every element.)
 //   Input [2, 3, 4, 5]
 const numbers = [4, 9, 16, 25];
 const newArr =numbers.map(Math.sqrt);
console.log(newArr);
 

// 14-filter() Method  (Get every element in the array that has a value of 18 or more:)
 //   Input [18,20]
 const agefilter = [3 , 10 , 18 ,20];
 const filter = agefilter.filter(checkAdult);
 function checkAdult(age){
     return age >= 18;
 }
 console.log(filter);
