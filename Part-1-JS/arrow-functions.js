const obj = {
    username: 'Slash',
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to our site.`);
        // this helps us to get the context inside of an object
    }
}

// console.log(obj.welcomeMessage());

// using this inside of an function
function usingThis(){
    const username = 'Suprim';
    console.log(username);
    // using this doesnt work inside of an function.
    // and we cannot access the values like we could inside of an object
}

usingThis();

const arrowFunc = (num1,num2) => {
    // console.log(this);
      //this doesnt work inside of an arrowfunc it returns {} 
    
    return num1 + num2;
}

console.log(arrowFunc(3,4));
