//most of time u observe that u consume promises rather than create
//eg - 

const { response } = require("express");
const { trusted } = require("mongoose");

//now lets learn how to create promises

const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    // DB calls, cryptography,network
    setTimeout(function(){
        console.log('Async task is complete');
        //here u have to apply method resolve() to consumed the promise
        resolve()
    },1000)
})

// here the connection of then is directly to resolve
promiseOne.then(function(){
    console.log("Promise Consumed");
    //it always come after the creation of promise
});

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Promise three created")
        resolve({username: "Chai",email: "chai@example.com"},1000)
    })
})

promiseThree.then(function(user){
    console.log("promise three resolve")
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({user})
        }else {
            reject("Error: Something went wrong")
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "Javascript", password:"123"})
        }
        else{
            reject("Error: JS went wrong")
        }
    },1000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
    console.log(response);
    }catch(error){
        console.log(error);
    }
}

//without try and catch block we cant handle gracefully

consumePromiseFive()


// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error){
//         console.log('E: ',error);
//     }
// }

// getAllUsers();

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))







