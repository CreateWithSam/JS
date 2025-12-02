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



