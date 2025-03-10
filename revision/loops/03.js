// for each

const coding = ['python','js','ruby','kotlin','go']

coding.forEach((code)=>{
    // console.log(code);
    
})

const myCoding = [
    {
        'langName':'JavaScript',
        'langFileName':'js'
    },
    {
        'langName':'Python',
        'langFileName':'py'
    },
    {
        'langName':'Java',
        'langFileName':'java'
    },
]

myCoding.forEach((code)=>{
    console.log(`key:${code.langName}, value:${code.langFileName}`);
    
})