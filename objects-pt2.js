// singleton object
// const tinderUser = new Object();

const tinderUser = {};

tinderUser.userId = '123abcd';
tinderUser.isLoggedIn = true;

// console.log(tinderUser);


// nesting a object inside of an object

const nestedObj = {
    userId:1,
    fullName:{
        userFullName: {
            firstName: 'Suprim',
            lastName: 'Khatri'
        }
    }
}

// console.log(nestedObj.fullName.userFullName);

// we can add two or more than two objects using the spread method which is used to add arrays too

const obj1 = {
    1: 'a'
};

const obj2 ={
   2: 'b'
};

// using the assign method to add objects
// const returnObject =  Object.assign({}, obj1, obj2);


// using the spread method
const returnObject = {...obj1, ...obj2};

// console.log(returnObject);

// creating and accessing an object inside of an array

const myArr = [
    {
        id:1,
        email:'abcd@mail.com'
    },
    {
        id:2,
        email:'abcde@mail.com'
    },
    {
        id:3,
        email:'abcdef@mail.com'
    }
];

// console.log(myArr[1].id);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
console.log(tinderUser.hasOwnProperty('isLogged'));





