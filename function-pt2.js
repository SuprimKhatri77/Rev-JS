const myOject = {
    username: 'Suprim Khatri',
    email: 'Suprim@77google.com'
};

function returnObject(anyobject){
    return anyobject.email;
}
// console.log(returnObject(myOject));

const myArr = ['Thor','Loki','Hela','Hulk'];

function returnArray(anyArray){
    return anyArray[1];
}
// console.log(returnArray(myArr));

// we can use spread operator in the functions parameter too

function spreadFunction(...num){
    return num;
}

console.log(spreadFunction(100,200,300,400));


