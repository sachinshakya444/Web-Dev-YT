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

console.log(addone(5))








