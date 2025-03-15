const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    setTimeout(() => {
        resolve()
        console.log('Async task is complete');
    }, 1000);
})


promiseOne.then(function(){
    console.log("Promise consumed");
    
})



new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('Async task 2');
        resolve()
    }, 1000);
}).then(()=>{
    console.log('promise 2 consumed'); 
    
})


const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve({username:'slash',email:"slash@gmail.com"})
    }, 1000);
})

promiseThree.then((user)=>{
console.log(user.username);

})




const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = true
        if(!error){

            resolve({username:'77slash',password:'1234'})
        } else{
            reject('ERROR: Something went worng!')
        }
    }, 1000);
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username
    
}).then((username)=>{
    console.log(username);
    
}).catch((error)=>{
    console.log(error);
    
}).finally(()=>{
    console.log('The promise is either resolved or rejected');
    
})



const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username:Javascript,password:'js'})
        } else {
            reject('ERROR: Something went wrong!')
        }
    }, 1000);
})


const consumePromiseFive = async () => {
    try{

        const response =  await promiseFive
        console.log(response);
    }
    catch(error) {
        console.log(error);
        
    }
   
}

consumePromiseFive()


async function getALlUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')        
        const data = await response.json()
        console.log(data[0].name);
        
    } catch (error) {
        console.log("e: ", error);
        
        
    }
    
}

// getALlUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    const data = response.json()
    return data;
}).then((data)=>{
    console.log(data[1].name);
}).catch((error)=>{
    console.log('e:', error);
    
}).finally(()=>{
    console.log("fetched user's name successfully");
    
})