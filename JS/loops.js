
// loops means repeating something//

for(let i=1; i<101; i=i+1){
    if(i%2 > 0){
        console.log("odd number");
    }
    else{
        console.log("even number");
    }
    

}

x=12
if(x%2 ===0){
    console.log("it is an even number");
}

//  from numbers 1-50
// were the number is divisible by 3 'buzz' should be printed
// were the number is divisible by 5 'fizz' should be printed
// were the number is divisible by 15 'fizzbuzz' should be printed



for(let i=1; i<51; i=i+1){
    if(i%15 ===0){
        console.log(`${i} fizzbuzz`)
    }
    else if (i%3 ===0) {
        console.log(`${i} buzz`)
    }
    else if (i%5 ===0){
        console.log(`${i} fizz`)
    }
    else{
        console.log(i)
    }
    
}