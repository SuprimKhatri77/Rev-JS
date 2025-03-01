// global scope
let a = 200;

if (true) {
    let a =700;
    console.log('Local scope:',a);
}

console.log('Global scope:',a);
