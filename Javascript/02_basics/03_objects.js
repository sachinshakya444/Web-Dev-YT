// two ways to declare obejects 1-literal 2-soncstructor

//singleton->using conctructor


//object literals

// Object.create  -->s using constructor
const mySym = Symbol("key1")


const JsUser = {
    name: "Sachin",
    age: 18,
    location:"Etawah",
    email:"sachinshakya@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"],
    "full name": "Sachin Shakya",
    [mySym]: "mykey1"
}

//behind the scene key are stored in string 

// console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
// console.log(JsUser.mySym);  //but it is not treated as Symbol datatype 
// //if u check data type then you will find its string
// console.log(typeof JsUser.mySym)
//so if you want to use as symbol try to write in [] in object and while accessing also
console.log(JsUser[mySym])


JsUser.email = "balagi@gmail.com" //if you want to change anything in object
// but if you dont want to change anything then you can freeze it
// Object.freeze(JsUser);
JsUser.email = "andrew@gmail.com"

console.log(JsUser);

//here wont get error but it wont change


JsUser.greeting = function(){
    console.log("Hello JS user");
}

console.log(JsUser.greeting);   //this gives fucntion reference
console.log(JsUser.greeting()); 


// now we want to reference name in object
JsUser.greetingTwo = function(){
    console.log(`Hello Js user ${this.name}`);
}

//same object then use this

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



//NOTE:whenever you access values then u use dot but sometimes you need sqr brackets 
//it ask in interview





