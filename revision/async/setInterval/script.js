

let intervalId;
document.getElementById('start').addEventListener('click',()=>{

   intervalId = setInterval(() => {
        console.log('slash',Date.now());
        
    }, 1000);
})

document.getElementById('stop').addEventListener('click',()=>{
    clearInterval(intervalId)
})
