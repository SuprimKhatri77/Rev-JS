
// declearing an array
const myArr = [0,1,2,3,4,5]
//  console.log(myArr[1])

const heroes = ["Iron Man","Spiderman","Captain America","Dr. Strange","Black widow"]
// console.log(heroes[0])


// creating a new array
const myArr2 = new Array("Suprim",7,"x")
// console.log(myArr2[0]);



// Array methods

// 1. push

myArr.push(6)
myArr.push(7)
// console.log(myArr)


// 2. pop 
myArr.pop()
// console.log(myArr);


// 3, unshift
myArr.unshift(77)
// console.log(myArr);


// 4. shift
myArr.shift()
// console.log(myArr);



// Questionary Methods


// a. Includes
// console.log(myArr.includes(33));

// b. indexof
// console.log(myArr.indexOf(22));



// Slice
console.log("A ", myArr)

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ", myArr);



// Splice
const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C ", myArr);








