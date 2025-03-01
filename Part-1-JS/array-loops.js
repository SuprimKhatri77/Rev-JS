// for of loop

const myarr = [1,2,3,4,5,6,7]
for(const arr of myarr){
    // console.log(arr);
}


const greetings = 'Hello worlds'
for(const greet of greetings){
    if(greet === ' '){
        continue;
    }
    // console.log(greet);
}

const map = new Map();
map.set('NP','Nepal')
map.set('US','United States')
map.set('JP','Japan')

for(const [key,value] of map){
    console.log(key,':', value);
    
}