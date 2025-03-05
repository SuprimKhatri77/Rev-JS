// nested object

const nestedObj = {
    userId: 1,
    userDetail:{
        fullname:{
            firstName: 'Suprim',
            lastName: 'Khatri',
        }, 
        age: 19,
        location: 'Butwal'
    }
}

// accessing the value inside of an nested object
// console.log(nestedObj.userDetail.fullname.lastName);

// accessing the value inside of an nested obj using square notation
// console.log(nestedObj["userDetail"]["fullname"]["firstName"]);


// adding two or more objects using spread operator

const obj1 = {
    1:'a'
}
const obj2 = {
    2:'b'
}
const obj3 = {
    3:'c'
}

const mergedObj = {...obj1,...obj2,...obj3}

// console.log(mergedObj["1"]);


// creating and accessing the value of an object inside of an array

const myArr = [
    {
        id:1,
        email:'slash@gmail.com'
    },
    {
        id:2,
        email:'flash@gmail.com'
    },
    {
        id:3,
        email:'splash@gmail.com'
    },
]

// console.log(myArr[0].email);




// object destructring

const course = {
    courseName: 'JavaScript',
    price: 999,
    courseInstructor: 'Suprim'
}


const {courseInstructor: instructor} = course
// console.log(courseInstructor);
console.log(instructor);

