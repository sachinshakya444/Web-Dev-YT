const user = {
    username: "Sachin",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
    }
    // here this reference current context
}

// now in previous we understand this can access all variable of that object/
// but what if we use this outside of that object
// let see

// user.welcomeMessage // here it is method so put bracess

user.welcomeMessage();
user.username = "sam"
user.welcomeMessage()


console.log(this)
// so here remember this refers to empty object BCOZ we are in node environment
 

// function chai(){
//     console.log(this);
// }

// chai()


// function chai(){
//     let username = "sachin"
//     console.log(this.username);

// }

// chai()  //here it gives undefined bcoz this only works in object not in function

// const chai = function(){
//     let username = 'Sachin'
//     console.log(this.username);
// }

// chai()  it also give undefined


// there is also new feature in ES6 

const chai = () => {
    let username = "sachin"
    console.log(this)
    console.log(this.username)
}

chai()


const addTwo = (num1,num2) => {
    return num1 + num2
}

console.log(addTwo(5,5))

// if you have one statement only then use implicit return


const addThree = (num1,num2) => (num1+num2);

console.log(addThree(10,3))

// curly braces likha toh return likhna padega otherwise nhi



// but what if you have to return object 
//let see

const addfive = () => ({username: "Sachin"})

console.log(addfive())



