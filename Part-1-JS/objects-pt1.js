const mySymbol = Symbol('Key1');
const myObj = {
    name: 'Suprim',
    'full name': 'Suprim Khatri',
    age: 18,
    email: 'Suprim@google.com',
    isLoggedIn: true,
    lastLogInDays: ['Sunday','Monday'],
    [mySymbol]: 'key1'
};

// we can access the obj values by using dot notation
// console.log(myObj.name);

// we can access the obj values by using square brackets as well
// console.log(myObj['email']);

// if we have a value inside an object and its key inside of ""/'' we have to square brackets as the dot notation wont work
// console.log(myObj['full name']);

// if we have to insert an symbol inside of an object we have to put the key of an objects inside of sqr brackets


// console.log(myObj[mySymbol]);
// console.log(myObj);

// we can change the value inside of an object by just assigning it a new value
myObj.email = 'Suprim@gmail.com'
// we can freeze an object by using object.freeze , this way we cannot change the value inside of an object
// Object.freeze(myObj);
myObj.email = 'Suprim@yahoo.com';
// console.log(myObj);


// function inside of an object

myObj.greeting = function (){
    console.log('Hello Mr.');
    
};

console.log(myObj.greeting());



