const codingLang = ['JavaScript','Java','Python'];

codingLang.forEach( (i) => {
    // console.log(i);
    
} )




// accessing the value of objects inside of an array using foreach

const myArray = [
    {
        languageName: 'JavaScript',
        langExtension: 'js'
    },
    {
        languageName: 'Java',
        langExtension: 'java'
    },
    {
        languageName: 'Python',
        langExtension: 'py'
    }
];

myArray.forEach( (items) => {
    console.log(items.languageName);
    
} )