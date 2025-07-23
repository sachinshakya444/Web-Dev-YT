//for of loop

// ["","",""]
// [{},{},{}]

// syntax
// for (const iterator of object) {
    
// }
// here object doesn't mean it will iterate of object it can be srting and array

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World!"
for(const greet of greetings){
    console.log(`Each Char is ${greet}`)
}


//Maps -> similar to array->knows for storing unique values

const map = new Map()
map.set('IN','India')
map.set('USA','United States of America')
map.set('Fr','France')
map.set('Fr','France')

console.log(map);

// now we want apply for of loop on map

for (const key of map) {
    //if we do this we got array that we dont want
    console.log(key)
}

for (const [key,value] of map) {
    console.log(key,':-',value);
}

// now let see for of loop work on Object or not

const myObject = {
    game1: 'NFS',
    game2: 'Total Overdose',
    game3: 'PubG',
    game4: 'Asphalt'
}

for (const [key,value] of myObject) {
    console.log(key,'->',value);
}


















