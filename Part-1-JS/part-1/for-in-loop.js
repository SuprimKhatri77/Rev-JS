const myObject = {
    js: 'Javascript',
    cpp: 'C++',
    java: 'Java',
    py: 'Python'
};
// console.log(myObject.js);

for(const i in myObject){
    console.log(`${i} is shortcut for ${myObject[i]}`); 
}