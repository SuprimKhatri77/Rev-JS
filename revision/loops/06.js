// reduce
const nums = [1,2,3,4]

initialValue = 0
const sumWithInitial = nums.reduce((accumulator,currentValue)=> accumulator + currentValue , initialValue)
console.log(sumWithInitial);
