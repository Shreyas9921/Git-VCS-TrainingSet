//Comment
console.log('Hello, World');

/*var name = "Nilesh";
let age = 45;
const smart = 1.121;
const isNumber = NaN;
let isAlive = true;
*/
let person = {name : 'ninaad', age : 30, isCertified : true}; //Object Literal - Reference type
console.log(person);

let color = ['Red', 'Blue', 'Green']; //Function Literal - Reference type
console.log(color);
console.log(typeof(color));

function greet(firstName, lastName) {
    // console.log('Hello, ' + name);
    console.log(`Hello, this is me - ${firstName} ${lastName} \n Good Morning Friends!`); //template literal syntax
}

greet('Nilesh', 'Ghule');

/* 
Note : __proto__ - is inbuilt property acts as an object of every reference type (i.e. Object-Class, Array, Function) 
in javascript that stores reference-address location information of inherited properties and methods in a concept of prototype chaining
*/

/*
Function : fucntion is JS is a set of expressions or statements that performs a task 
or computes calcuates & returns a value to calling function or expression
*/

function calc(digit, anotherdigit) {
    return digit * anotherdigit;
}

console.log(/*expression*/calc(5, 5));

/*
let arr = [2, 1, 1, 9, 9, 9]; //Array Literal - Reference type
var unknown;
var helloNilesh = null;
*/
// let jsFunc = function func() { //Function Literal - Reference type
//     console.log('Js function');
// }
/*
console.log(name + " " + age);
console.log(name + " " +typeof(name));
console.log(age + " " + typeof(age));
console.log(smart + " " + typeof(smart));
console.log(isNumber + " " + typeof(isNumber));
console.log(isAlive + " " + typeof(isAlive));
console.log(object + " " + typeof(object));
console.log(arr + " " + typeof(arr));
console.log(typeof(unknown));
console.log(helloNilesh + " " + typeof(helloNilesh));
*/
