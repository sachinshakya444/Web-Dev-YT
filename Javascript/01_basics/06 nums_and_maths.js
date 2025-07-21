const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3));
const otherNumber2 = 1123.8966
console.log(otherNumber2.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN')); //INDIAN NUMBER SYSTER

// concept of max and min


// Number.MAX_VALUE


//++++++++++++++ MAths ++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.PI);
console.log(Math.round(4.33));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.sqrt(25));
console.log(Math.pow(4,2));
console.log(Math.min(4,5,6,2));
console.log(Math.max(4,5,6,2));


console.log(Math.random());
console.log((Math.random())*10 + 1);
console.log(Math.floor(Math.random()*10) + 1);


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min)




















