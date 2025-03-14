const name = 'Suprim';
const repoCount = 7;

console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`);

const gameName = 'Clash-Of-Clans';


// split is used to split a string into an array
console.log(gameName.split('-')); 


// charAt helps us to find out the what character is at the index we have given and it counts the space as well
console.log(gameName.charAt(4));


// replace replaces the first string of the string we want to replace we have to give first the word we want to replace and then afterwards the replacement
console.log(gameName.replace('-',' '));

// replaceAll is same like replace but it replaces the whole string for eg if - is repeated more than once it replaces every - in the string unlike the replace string method which replaces the first - only
console.log(gameName.replaceAll('-',' '));


// slice gives us the string which we have mentioned in the slice value it takes two value indexStart and indexEnd
console.log(gameName.slice(0,5));


// length checks the length of the string
console.log(gameName.length);