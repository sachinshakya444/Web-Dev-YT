const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject){
    //it shows only key 
    console.log(key);
}
for (const key in myObject){
    //it shows only values
    console.log(myObject[key]);
}
for (const key in myObject){
    //it shows both
    console.log(`${key} -> ${myObject[key]}`);
}

// let see forin loop work on array or not
const programming = ["js","rb","py","java","cpp"]

for (const key in programming) {
  console.log(key);
}
for (const key in programming) {
  console.log(programming[key]);
}
for (const key in programming) {
  console.log(`${key}->${programming[key]}`);
}

// now let see will it work on map or not

const map = new Map()
map.set('IN','India')
map.set('USA','United States of America')
map.set('Fr','France')
map.set('Fr','France')

for (const key in map) {
    //map wont work bcoz its not iterable
    console.log(key);
}

// objects -> forin
// Array -> forof