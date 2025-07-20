// Dates

let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toUTCString());

console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 6, 20)
// let myCreatedDate = new Date(2025, 6, 20,5,3)
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("07-20-2025")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamps = Date.now()

console.log(myTimeStamps);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());
console.log(newDate.getFullYear());

// `${newDate.getDate()} and the time is `

console.log(newDate.toLocaleString('default',{
    weekday: "long",
    day: "2-digit"
}))