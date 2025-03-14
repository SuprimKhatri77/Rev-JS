let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.getElementById('guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');


let prevGuess = []
let numGUess = 1;


let playGame = true;

if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number.')
    }
    else if (guess < 1){
        alert('Please enter a number greater than 1.')
    }
    else if (guess > 100){
        alert('Please enter a number less than 100.');
    } else{
        prevGuess.push(guess);
        if (numGUess >= 10){
            displayGuess(guess)
            displayMessage(`Game Over , Random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
    
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    } else if(guess < randomNumber){
        displayMessage('Number is Too low!')
    } else if(guess > randomNumber){
        displayMessage('Number is Too High!')
    }

}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `;
    numGUess++;
    remaining.innerHTML  = `${11 - numGUess}`

}
function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}
function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 class="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector('.newGame')
    newGameButton.addEventListener('click',()=>{
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGUess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGUess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        lowOrHigh.innerHTML = ''
        playGame = true
    })
}