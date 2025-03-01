const box = document.querySelectorAll('.boxes')
const body = document.querySelector('body')

box.forEach( (item)=>{
    item.addEventListener('click', (s)=> {
     body.style.backgroundColor = s.target.id;
    })
} )