function addTwoNumbers(num1,num2){
    return num1 + num2;
}
const result = addTwoNumbers(5,2);
// console.log(result);


function loggedInMessage (username){
    if(!username){
        console.log('Please enter a username');
    }
    else{
    return `${username} just logged in.`
    }
}
console.log(loggedInMessage('slash'));

