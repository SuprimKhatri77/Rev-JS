const marvel_heroes = ["Thor","Iron man","Spiderman"]
const dc_heroes = ["superman","batman","flash"]

// spread operator

const allHeroes = [...marvel_heroes,...dc_heroes]
// console.log(allHeroes);



// flat

const nestedArray = [1,2,3,[4,5,6],7,8,[9,1,3,[5,6,8]]]

const flatArray = nestedArray.flat(2)
// console.log(flatArray);


// converting a value into array
let score1 = 100
let score2 = 200
let score3 = "slash"

console.log(Array.of(score1,score2,score3));


