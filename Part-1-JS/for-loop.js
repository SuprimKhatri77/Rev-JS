for(let i = 0; i <= 10; i++){
    // console.log(i); 
}


const myArr = [1,2,3,4,5,6,7];

for(let i = 0; i < myArr.length; i++){
    const container = myArr[i];
    // console.log(container);
    
}


for(i = 1; i <= 10; i++ ){
    for(j = 1; j <= 10; j++){
        const result = i * j;
        // console.log(`${i}*${j} = ${result}`);
        
    }
}

// break : when the condition is matched it will stop the loop
for (let i = 0; i < 10; i++) {
    if(i == 5){
        console.log('Now the lopp will stop');
        break;
    }
    // console.log(i);
    
}



// continue: if the condn is matched it will skip the condn's output and then run the program as it is
for (let i = 0; i < 10; i++) {
    if(i == 5){
        console.log('Now the loop condn is matched');
        continue;
    }
    console.log(i);
    
}