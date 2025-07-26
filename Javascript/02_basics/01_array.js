// arrray

const myArr = [0,1,2,3,4,5]

console.log(myArr[0])

const myHeros = ["Shaktiman","naagraj"]

const myArr2 = new Array(1,2,3,45,66)

console.log(myArr[1]);

myArr.push(44);
console.log(myArr);
myArr.push(49);
console.log(myArr.pop());


myArr.unshift(9)
//it shift in start

myArr.includes(9);
//it return bollean and check wheater it is present or not

myArr.indexOf(3);
//it returns index where the value is present and if not it returns -1

console.log(myArr); 

const newArr = myArr.join();
//it binds the array in string and data type of new array is string

console.log(myArr);
console.log(typeof myArr);
console.log(newArr);
console.log(typeof newArr);


//slice ,splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,4)

console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);


//here the difference between slice and splice 
//slice donot manipulate original array
//splice manipulate original array
