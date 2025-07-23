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


