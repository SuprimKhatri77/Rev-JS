// falsy values

// false,0,-0,BigInt 0n, '',null,undefined,NaN



// truthy values

//  '0', 'false' , ' ', [], {}, function(){}, 


// Null coalescing operator (??): null , undefined

let val1;

// when both the values are not null or undefined the first value is taken
// val1 = 5 ?? 15;


// if the first value is null then the second value is checked if it's a value it is taken
// val1 = null ?? 7;


// same as null
// val1 = undefined ?? 8;


val1 = null ?? undefined;
console.log(val1);


// Ternary operator
// conditon ? true:false

const price = 120;

price >= 70 ? console.log(true) : console.log(false);


