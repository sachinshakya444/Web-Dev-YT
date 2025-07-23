// switch(key){
//     case value:

const { mongo } = require("mongoose")

        
//     break;

//     default:
//         break;
// }


const month = 3

switch (month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
    
    case 3:
        console.log("March");
        break;
    
    case 4:
        console.log("April");
        break;
    
    default:
        console.log("default case match");
        break;
}
const mont = "march"

switch (mont){
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("Feb");
        break;
    
    case "march":
        console.log("March");
        break;
    
    case 4:
        console.log("April");
        break;
    
    default:
        console.log("default case match");
        break;
}

