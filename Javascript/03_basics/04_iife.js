//Immediately Invoked Function Expressions (IIFE)

// Why used iife ask in interview
// answer is global scope ke variable se bachne ke liye we used iife

(function chai(){ 
    //named IIFE
    console.log(`DB CONNECTED`);
})();

// semicolon must here bcoz it is invoked but it doesn't know where to 


( () => {
    console.log("DB CONNECTED TWO");
})();



( (name) => {
    //SIMPLE IIFE
    console.log(`DB CONNECTED THREE ${name}`);
})('Mother');


