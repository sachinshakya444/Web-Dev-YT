console.log("Test")
function updateClock(){
    const timeElement = document.getElementById("time");

const dateElement = document.getElementById('date');

const now = new Date();

const hours = now.getHours() % 12 || 12;
const minutes = now.getMinutes().toString().padStart(2,"0"); // 01 02 03 04 05
// console.log(minutes); //"11"
// OR
// minutes < 10 ? `0${minutes} ` : ${minutes}

const seconds = now.getSeconds().toString().padStart(2,"0")

const ampm = now.getHours() >= 12? "PM" : "AM";

timeElement.textContent = `${hours}:${minutes}:${seconds}:${ampm}`;

const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
}

dateElement.textContent = now.toLocaleDateString(undefined,options); //its a proxied object
}




// setTimeout
setInterval(updateClock,1000)

updateClock();

// window.onload



