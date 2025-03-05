let a = 7


function func(){
    let a = 5
    console.log('Inner', a);
    
}
// func()
// console.log('outer', a);


function one(){
    userName = "slash"
    function two(){
        lastName = '77x'
        // we can access the username inside of the nested function
        console.log(`${userName}${lastName}`);
    }
    // but we cannot access the lastName outside of the inner function
    // console.log(lastName);
    
    two()
}
// one()


if(true){
    userName = "slash"
    if(true){
        lastName = '7777x'
        console.log(userName + lastName);
    }
    // console.log(lastName)
}

// console.log(userName)