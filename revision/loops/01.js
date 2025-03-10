// for of loop

const arr = [1,2,3,4,5]

for (const val of arr) {
    // console.log(val);
    
}

const greetings = 'Hello world!'

for (const greet of greetings) {
    if (greet === ' ' ){
        continue;
    }
    else{
    // console.log(greet);
    }
    
}

const map = new Map()
map.set('NP','Nepal')
map.set('FR','France')
map.set('CH','China')

// console.log(map);
for (const [key,value] of map) {
    // console.log(key, ':-', value);
    
}

const myObject = {
    'game1':'NFL',
    'game2':'clash'
}

// for (const [key,value] of object) {
    // for of can be used for a object
// }

