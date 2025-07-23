//for

for (i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        console.log("4 is best number");
    }
    console.log(element);
}


for (let i = 0; i < 10; i++) {
    console.log(`outerloop is ${i}`)
    for(let j = 0; j<=10 ; j++){
        // console.log(`inner loop ${j}`);
        console.log(i + '*' + j + '=' + i*j);
    }
    
}