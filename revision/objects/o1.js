const JsUser = {
    username:'Suprim',
    isActive: true,
    age: 19,
    location: 'Butwal',
    email:'suprim@gmail.com',
}

// console.log(`Name: ${JsUser.username} \n Age: ${JsUser.age}`);
// console.log(JsUser["age"]);
// console.log('Before: ', JsUser.email);



// changing a exisiting value
JsUser.email = 'suprimkhatri@gmail.com'
// console.log('After: ', JsUser.email);



// squre bracket notation
// useful when there's a string in the object key because we cant access such keys using dot notation
const con = {
    'full name': 'slash'
}
// In this object the key cannot be accessed using dot notation we must use square notation to access the key
// console.log(con["full name"]);



JsUser.greeting = function(){
    
    return console.log('Hello! ,', JsUser.username);
}

JsUser.greeting()



