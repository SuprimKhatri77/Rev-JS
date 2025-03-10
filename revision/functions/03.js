// arrow functions and this

const obj = {
    username: 'Slash',
    price: 999,
    welcomeMessage:function (){
        console.log(`${this.username}, welcome!`);
        
    }
}

// obj.welcomeMessage()


const arrowFunction = ()=>{
    console.log('arrow function');
    
}

// arrowFunction()

// implicit return

const func = (num1,num2) => num1+num2
console.log(func(5,2))