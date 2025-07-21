//now start with constructor to declare objects

// const tinderUser = new Object()
const tinderUser = {}  //non singleton

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

console.log(tinderUser); //it gives same empty object

//now next ONE

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname: "Sachin",
            lastname: "Shakya"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname?.userfullname.firstname);

//lets merge objects like we did in array

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1,obj2};
//it give same problem as we seen in array output is array in array so here is object in object

// so here is another method to do this

const obj3 = Object.assign({},obj1,obj2) //this is syntax we dont need to put braces but it gives surity to get right result
// here after merging it is merging in obj1,
// console.log(obj1)
console.log(obj3);


const obj4 = {...obj1,...obj2}  //by using spread operator we also do this 
console.log(obj4)


//Whenever info comes from database it is in the form of array of objects

const users = [
    {
        id: 1,
        email: "S@gmail.com"
    },
    {
        id: 2,
        email: "B@gmail.com"
    },

]

console.log(users[0].email)

console.log(tinderUser);


console.log(Object.keys(tinderUser));
//Here if you notice in output all keys are in array
//by this we can apply loop it helps when data is come from database

console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

// to find if this property is present or not we use hasownproperty

console.log(tinderUser.hasOwnProperty('isLoggedIn'))
