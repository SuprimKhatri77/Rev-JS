const marvelHereos = ['Thor','Ironman','Spiderman'];
const dcHeroes = ['Batman','Supreman','Flash'];

// if we push the dc heroes array to marvel heroes it will create a new array inside of the marvel heroes array and if we have access the value of the dc heroes array we have to give a first index of the array i.e 3 and the index of the hero we want to see
// marvelHereos.push(dcHeroes);
// console.log(marvelHereos);

// to acces the value inside of dc heroes array
// console.log(marvelHereos[3][0]);


// if we use concat we can just insert one array into another without creating a new array inside of an exisiting array
const concat = marvelHereos.concat(dcHeroes);
// console.log(concat);


// its better to use spread method than to use concat because if we have multiple arrays to insert inside of an array we cannot do that using concat
const myHeroes = ['Baalbir','shaktiman','Doraemon'];
const spread = [...marvelHereos,...dcHeroes,...myHeroes];
// console.log(spread);


// if we have array inside of an array we can use flat to get one array 
const flatArray = [1,2,3,[4,5,6],7,[8,9,[10,11,12]]];
// console.log(flatArray.flat(Infinity));

// we can covert multiple variable into an array using Array.of
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));

// is array checks if the given value if an array or not

console.log(Array.isArray('Slash'));

// the above value can be converted into an array using array.of instead of .of we can use from too

console.log(Array.of('slash'));

// the main difference betn using .of and .from is that .from makes the given value into individual value of an array whereas .of converts whole of the value into a single array value
console.log(Array.from('slash'));