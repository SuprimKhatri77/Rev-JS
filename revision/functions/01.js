function greeting(){
    console.log('hello');
}

// greeting()

function addTwoNumbers(num1,num2){
    if (typeof num1 === "number" && typeof num2 === "number" ){
        return num1 + num2;
    }
    else {
        return "The given param's argument is not a number."
    }
}

// console.log(addTwoNumbers(5,2))

const result = addTwoNumbers(5,2)
// console.log(result);


function loginUserMessage(username){
    if (username === undefined){
        return 'please enter a username.'
    } else{
    return `Hello, ${username}!`
    }
}
// console.log(loginUserMessage('slashyyy'));



function calculateCartPrice(...price){
    return price
    
}

// console.log(calculateCartPrice(2,5,6,7,8,9))


const user = {
    username: 'Slash',
    isActive: true
}

function handleObject(anyobject){
    return `Username is ${anyobject.username}, isActive: ${anyobject.isActive}`
}
// console.log(handleObject(user))


const myArr  = [100,200,300,400]

function returnArrayValue(getArray){
    return getArray[1]
}
console.log(returnArrayValue(myArr))
