// if
const isUserloggedIn = true

if( 2 == "2"){
    console.log("executed");
}
if( 2 === "2"){
    console.log("executed");
}

// <,>,<=,>=,==,!=,===
const temperature = 50;
if (temperature === 41){ 
    // === check data type also
    console.log("less than 50");
}else{
    console.log("temperature is greater than 50");
}

console.log("Executed");

const score = 200

if (score > 100){
    const power = "fly"
    console.log(`User power: ${power}`);
}

const balance = 1000


if(balance > 500) console.log("test"),console.log("Test2");
//its not a good practice


if(balance < 500)
{
    console.log("Less than 500");
}else if(balance<750)
{
    console.log("less than 750");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard )
{
    console.log("Allow to but course");
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}



















