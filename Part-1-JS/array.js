const myArr = [0,1,2,3,4,5];
const myHeroes = ['Iron Man','Captain America','Hawkeye','Hulk'];
const myArr2 = new Array(0,2,4,6,8);

// console.log(myHeroes[0]);
// console.log(myArr);
// console.log(myArr2);


// push inserts a new value into the array 
myArr.push(7);


// pop removes the last value of an array
myArr.pop();


// unshift adds a new value at the first index of an array
myArr.unshift(7);


// shif removes the value at the first index of an array
myArr.shift();

// .includes checks if the given value is in the array or not and then returns a boolean value i.e true/false
// console.log(myArr.includes(8));


// console.log(myArr);

const myn1 = [0,1,2,3,4,5];

console.log(myn1);

// slice doesn't manipulate the main array
const slice = myn1.slice(1,5);
console.log(slice);
console.log('A',myn1);


// splice manipulates the main array
const splice =  myn1.splice(1,4);
console.log(splice);
console.log('B',myn1);