const myNums = [1,2,3,4,5,6,7,8,9,10];


const filteredNums = myNums.filter( (nums) => {
    return nums > 5;
});
// console.log(filteredNums);



// map

const newNums = myNums.map( (num) => {
    return num + 10;
} )

// console.log(newNums);


// for each

 myNums.forEach( (item) => {
    // console.log(item + 10);
    
} )



// chaining

const newNums2 = myNums
                .map( (num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >=40 )

// console.log(newNums2);


// reduce
// const intialValue = 0;
const  newNums3 = myNums.reduce( (acc,cur) => acc + cur , 0)
// console.log(newNums3);




const shoppingCart = [
    {
        courseName: 'js course',
        price:1
    },
    {
        courseName: 'py course',
        price: 2
    },
    {
        courseName: 'java course',
        price: 3
    },
    {
        courseName: 'c++ course',
        price: 4
    },
]


const priceToPay = shoppingCart.reduce( (acc,items) => {
  return acc + items.price
},0)

console.log(priceToPay);





