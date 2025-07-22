function saymyName(){
    console.log("H")
console.log("I")
console.log("T")
console.log("E")
console.log("S")
console.log("H")
}

saymyName();

// function addTwoNumbers(number1, number2){
//     console.log(number1+number2)
// }


function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result;
}
//if u didn't type return then what will be in result in result if you
// consolelog of result then u get undefined
const result = addTwoNumbers(2,4);

console.log("Result: ",result);


function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username")
        return
    }
    return `&{username} just logged in`
}
// function loginUserMessage(username){
//     if(!username){
//         console.log("Please enter a username")
//         return
//     }
//     return `&{username} just logged in`
// }


//Here we can also give default value

// function loginUserMessage(username = "Sachin"){
//     if(!username){
//         console.log("Please enter a username")
//         return
//     }
//     return `&{username} just logged in`
// }

console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage()) //let see what we get when no values passed
//output: undefined


console.log(loginUserMessage())
console.log(loginUserMessage("Hey"))

 //sometimes when we make shopping cart where values come multiple times
 //so the solution is rest operator

 function calculateCartPrice(...num1){
    return num1;
 }
//  function calculateCartPrice(x,y,...num1){
//     return num1;
//  }

 console.log(calculateCartPrice(200,400,500))
 console.log(calculateCartPrice(200,400,500,2000))

//  output - it comes in form of array

const user = {
    username: "Sachin",
    price: 99
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user);

//problem is here what if it is not price it is prices
// so it will give undefined in output


//we can pass object like this also

handleObject({
    username: "sam",
    price: 399
})

// we can also pass array

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,4400,600,800]))


