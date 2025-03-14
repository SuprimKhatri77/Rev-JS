const body = document.body;
const allButtons = document.querySelectorAll('.button');

allButtons.forEach((button)=>{
    button.addEventListener('click',()=>{
        const color = button.getAttribute('id')
                body.style.backgroundColor = `${color}`
})
})