function one(){
    const username = 'Suprim';
    function two(){
        const websiteName = 'Youtube';
        console.log(websiteName + username);
        // we can access the parent's variables inside of an child
        // for eg- a child can ask for an icecream to an adult but an adult asking a child for an icecream is quite unusual
    }
    // console.log(websiteName);
    // the above console.log doesn't works because we cannot access the variables and its value created inside of an scope i.e websiteName was created inside of the function two and we tried to access it outside of it
    // two();
}
// one();


// scope inside of an nested loop

if (true) {
    const username ='Suprim';
    if(true){
        const websiteName = 'Youtube';
        console.log(username + websiteName);
    }
    // console.log(websiteName);  
    // on upon executing the above code we get the same error as we got up in the above function and the reason for it is same i.e we cannot access the variables which are created inside of an scope outside of it.
}
// console.log(username);
// reason for this is same as the above one





// Hoisting

console.log(hoistingEg(5));
function hoistingEg(num){
    return num + 1;
}

// hoistingEg2(5);
// when we try to give value to a parameter of the function stored inside of a variable it gives and error its because of hoisitng and we cannot give the value before executing the function but incase of a normal function we can do so
const hoistingEg2 = function(){
    return num + 2;
}