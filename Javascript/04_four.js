const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject){
    console.log(key);
}
for (const key in myObject){
    console.log(myObject[key]);
}
for (const key in myObject){
    console.log(`${key} -> ${myObject[key]}`);
}