// scops
var c = 300;  //global scope



if(true)  //block scope
{
    let a = 10;
    const b =20;
    var c = 30;
}

// console.log(a)
// console.log(b)
console.log(c)


function one(){
    const username = "Sachin"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two();
}

//child function can access parent variables

one();


if(true) {
    const username = "hitesh"
    if (username === "hitesh"){
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


//++++++++++++++++++++ intersting ++++++++++++++++++++++++++

function addone(num){
    return num + 1
}

(addone(5))


// here we can declare fucntion on two ways both are same but there is some differnece let see


addone(4) //here it wont give error if we declare it first from function

function addone(num){
    return num + 1;
}



// addTwo(44) //here it will give error if we declare it before funtion
addTwoNumbers(5)
const addTwo = function(num){
    return num + 2;
}
//  this declaration of function is also called expression
//it is called hoisting








