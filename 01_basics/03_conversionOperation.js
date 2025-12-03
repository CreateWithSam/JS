let score = "Sameer"

console.log(typeof score);
console.log(typeof (score));  // two ways to know types of variable


let valueInNumber = Number(score)
console.log(typeof valueInNumber);  // we can convert anything as a number but we have to check that value is actual a number or not
console.log(valueInNumber);


// NaN => not a number

// "33" => 33
// "33abe" => NaN
// null => 0   in null case we got value = 0
// undefined => undefined  in case of undefined we got NaN
// in case of boolean value we got 1(true) 0(false)
// for a string we got NaN

let isLoggedIn =  "Sam"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); 

// 1 => true
// 0 => false
// "" => false
// "Sam" => true

let someNumber = 18

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


// **********************     Operations   ***********************

let value = 3
let negvalue = -value
console.log(negvalue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2**2);
console.log(2%2);

let str1 = "hello"
let str2 = "Sam"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log( (3 + 4 ) * 5 % 3);

console.log(+true);
console.log(+"");

let num1, num2, num3 

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++
console.log(gameCounter);





