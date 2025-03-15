const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const body = document.body


function getRandomColor(){
    const red = parseInt(Math.random() * 255 + 1);
    const green = parseInt(Math.random() * 255 + 1);
    const blue = parseInt(Math.random() * 255 + 1);
    
    return `rgb(${red},${green},${blue})`
}
let intervalId = null;
startBtn.addEventListener('click',()=>{
    if (intervalId === null){

        intervalId = setInterval(() => {
            body.style.backgroundColor = getRandomColor();
        }, 1000);
    }
})

stopBtn.addEventListener('click',()=>{
    clearInterval(intervalId);
    intervalId = null;
})
const randomNum = parseInt(Math.random() * 255 + 1);
console.log(randomNum);
