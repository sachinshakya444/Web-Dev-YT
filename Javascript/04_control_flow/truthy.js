// const userEmail = "s@gmail.com"
const userEmail = []
// const userEmail = ""

if(userEmail){
    console.log("Got user email");
}else{
    console.log("Dont have user email");
}

// flasyy values
// false, 0, -0, BigInt -> 0n, "", null, undefined, NAN, 

// else are truty values

//truthy values
//"0", 'false', " ", [], {}, function(){},

if(userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
        console.log("Object is empty");
}


// Nullish Coalscing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10;
val1 = null ?? 10; 
val1 = undefined ?? 15; 
val1 = null ?? 10 ?? 15

// why use this operator sometimes when you database or using firebase
// then maybe you donot get response directly
//you get two values null or chances maybe you dont get or undefined


console.log(val1);


//Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("More than 80")















