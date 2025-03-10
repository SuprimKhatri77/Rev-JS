// map
const myNums = [1,2,3,4,5,6,7,8]

const newNums = myNums.map((num)=>{
    return num + 10
})

// console.log(newNums);


// chaining
const nums = [1,2,3,4,5,6,7,8,9,10]

const chainResult = nums
                    .map((num)=> num * 10)
                    .map((num)=> num +1)
                    .filter((num)=> num > 50)
console.log(chainResult);
