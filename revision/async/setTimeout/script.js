const changeText = ()=>{
    document.querySelector('h1').innerHTML = 'slash77x'; 
}   
const changeMe = setTimeout(changeText, 2000);
document.getElementById('stop').addEventListener('click',()=>{
    clearTimeout(changeMe)
})

