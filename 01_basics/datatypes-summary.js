//  Primitive Data Types in JS

// 7 types : String, Numbers, Boolean, Null, Undefined, Symbol, BigInt


const score = 100
const scoreValue = 100

const isLoggedIn = false
const outsideTemp = null
let userEmail; 
const id = Symbol('12345')
const anotherId = Symbol('12345')
const bigNumber = 9007199254740991n  // if we include n at last then it will be treated as bigInt



// console.log(id === anotherId); 





//Reference Data Types(Non Primitive Data Types)

// Object, Arrays, Functions

const heros = ["salman", "shahrukh", "amir"]
let myObj ={
    name: "sameer",
    age: 18,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof anotherId);
console.log(typeof userEmail);
console.log(typeof outsideTemp);
console.log(typeof isLoggedIn);
console.log(typeof score);
console.log(typeof bigNumber);
console.log(typeof stringNumber);
console.log(typeof Array);
console.log(typeof Object);
console.log(typeof Object);

