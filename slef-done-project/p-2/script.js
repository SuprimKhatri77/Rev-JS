const calculate = document.querySelector('button');

calculate.addEventListener('click', (s)=>{
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const para = document.querySelector('p');

    if(height === '' || height < 0 || isNaN(height)){
      para.innerHTML = 'Invalid height';
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        para.innerHTML = 'Invalid weight';
    }
    else {
        const BMI = (weight / ((height*height)/1000)).toFixed(2);
        para.innerHTML = BMI;
    }
})