const name = "Sameer"
const repoCount = 5

console.log(name + repoCount + "Value"); // we dosen't use type of syntax

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  // we code like this , this one is better syntax

const gameName = new String('CodeWithSam')
// console.log(gameName[0]);
// console.log(gameName.__proto__);



console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('d'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Sameer"
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sameer.com/mohammad%20sameer"

console.log(url.replace('%20', '_'));
console.log(url.includes('sameer'));
console.log(url.includes('samay'));

console.log(gameName.split('_'));









