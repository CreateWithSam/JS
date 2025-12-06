const score = 400
console.log(score);      // const score = 500 we can't reassign value to const variable


const balance = new Number(100)            // this is object type not primitive type
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));               // it will show 2 decimal points


const otherNumber = 123.123456
console.log(otherNumber.toPrecision(3));     

const hundreds = 1000000
console.log(hundreds.toLocaleString("en-IN"));    // it will show number in indian format with commas



// ++++++++++++Maths+++++++++++++++
console.log(Math);

// console.log(Math.abs(-4));
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(2,3,4,5,-1,0));
// console.log(Math.max(2,3,4,5,-1,0));


console.log(Math.random());          // it will give random number between 0 to 1
console.log((Math.random()*10) + 1); 
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);   // it will give random number between min and max including both





