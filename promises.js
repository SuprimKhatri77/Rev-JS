const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task Completed");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise completed");
});


new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log('Async Task 2');
    resolve()
  },1000)
}).then(()=>{
  console.log('Promise resolved');
  
})


const promiseThree = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve({username:'Slash',email:"@slash77x.gmail.com"})
  },1000)
})

promiseThree.then((user)=>{
  console.log(user);
  
})


const promiseFour = new Promise((reslove,reject)=>{
  setTimeout(() => {
    let error = true
    if(!error){
      reslove({username:'Suprim',password:'777x'})
    } else{
      reject('ERROR: Something went wrong');
    }
  }, 1000);
})

promiseFour.then((user)=>{
  console.log(user);
  return user.username;
}).then((username)=>{
  console.log(username);
}).catch((error)=>{
  console.log(error);
}).finally(()=> console.log('The promise is either resolved or rejected'));



const promiseFive = new Promise((resolve,reject)=>{
  setTimeout(() => {
    let error = false
    if(!error){
      resolve({username:"JavaScript",password:"console.log"})
    } else{
      reject('Error: 404;')
    }
  }, 1000);
})


async function consumePromiseFive(){
  try {
    const response = await promiseFive
    console.log(response);
    
  } catch (error) {
    console.log(error);
    
  }
}

consumePromiseFive()


// const getAllUsers = async ()=>{
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data =  await response.json()
//     console.log(data);
    
//   } catch (error) {
//     console.log("E:",error);
//   }
// }

// getAllUsers()


// const  getAllUsers = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     const users = async () => {
//       let error = false
//     if(!error){
//       const response = await fetch('https://jsonplaceholder.typicode.com/users')
//       const data =  await response.json()
//       console.log(data);
      
//     }
//     else{
//       console.log("error");
//     }

//     }
//     users()
//   },1000)
// })

// getAllUsers.then((users)=>{
//   console.log(users);
  
// }).catch((error)=>{
//   console.log(error);
  
// })

fetch('https://api.github.com/users/suprimkhatri77')
.then((response)=>{
  return response.json()
}).then((data)=>{
 console.log(data);
 
}).catch((error)=> console.log(error));