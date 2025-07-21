const name = "hitesh"
const repoCount = 50
console.log(name + repoCount +" Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-yes')

// string is object not array it gives property of length and and some methods which is prototype

console.log(gameName[0]);

console.log(gameName.__proto__);  //it gives empty object which is not empty
//its syntax but we dont need to write proto

console.log(gameName.length);
console.log(gameName.toUpperCase());  // it doest not change original value

console.log(gameName.charAt(1)) // it take index and tell what is present at that index

console.log(gameName.indexOf('t'));  // it takes character and return index
//it returns -1 if character doesn't present

const newString = gameName.substring(0,3)
console.log(newString);
//it ignores if you give negative values 

const anotherString = gameName.slice(-1,4)
console.log(anotherString);

const newStringOne = "  hitesh   "
//sometime we dont need space in database so here we use trim
console.log(newStringOne.trim());
console.log(newStringOne.trimEnd());
console.log(newStringOne.trimStart());


const url = "https://hitesh.com/hitesh%20choudhary"
//browser doesn't compataible with space so it replace space with %20 in urnl coding
//so i want remove it
console.log(url.replace('%20','-'))
//here find and replace

console.log(url.includes('hitesh'))
console.log(url.includes('sundar'))

//now i want to convert it in array based on space or - or something else
// here we use split function
console.log(gameName.split('-'));
const h = gameName.split('-')

console.log(h[1]);
