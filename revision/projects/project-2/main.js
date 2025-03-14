const heightInputElement = document.getElementById('height');
const weightInputElement = document.getElementById('weight');

const calculateButton = document.getElementById('calculate-btn');
const result = document.getElementById('results');

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const heightValue = parseFloat(heightInputElement.value);
    const weightValue = parseFloat(weightInputElement.value);

    result.innerHTML = ''; 

    if (!isNaN(heightValue) && heightValue > 0 && !isNaN(weightValue) && weightValue > 0) {
        const heightInMeters = heightValue / 100;  
        const BMI = weightValue / (heightInMeters ** 2);

        const pElement = document.createElement('p');
        pElement.textContent = `Your Body Mass Index is ${BMI.toFixed(2)}`;

        const BMIresult = document.createElement('p');

        if (BMI < 18.6) {
            BMIresult.textContent = 'You are underweight';
        } 
        else if (BMI >= 18.6 && BMI <= 24.9) {
            BMIresult.textContent = 'You are at a normal weight.';
        } 
        else {
            BMIresult.textContent = 'You are overweight';
        }

        result.appendChild(pElement);
        result.appendChild(BMIresult);
        result.style.color = 'green';
    } else {
        result.textContent = 'Please enter a valid height and weight value';
        result.style.color = 'red';
    }
});
