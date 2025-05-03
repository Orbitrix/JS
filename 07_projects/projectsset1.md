# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
console.log("Orbitrix")
const btn = document.querySelectorAll(".button")
const body = document.querySelector("body")

// console.log(btn);
// console.log(body);

btn.forEach(function(button){
    // console.log(button);
    button.addEventListener("click", function(e){
        // console.log(e);
        // console.log(e.target);
        if (e.target.id === "grey") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "white") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "blue") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "yellow") {
            body.style.backgroundColor = e.target.id;
        }
        
    })
})

```

## Project 2

```javascript
const form = document.querySelector("form")

form.addEventListener("click", function(e){
    e.preventDefault();

    const height = parseInt(document.getElementById("height").value)
    const weight = parseInt(document.getElementById("weight").value)
    const result = document.getElementById("results")

    if(height === "" || height < 0 || isNaN(height)){
        result.innerHTML = `Please give a valed height ${height}`
    }else if(weight === "" || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please give a valed height ${weight}`
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        result.innerHTML = `<span>${bmi}</span>`
    }
})

```

## Project 3

```javascript

let clock = document.getElementById("clock")

setInterval(function(){
    let date = new Date()

    clock.innerHTML = date.toLocaleTimeString()
}, 1000)

```

## Project 4

```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('PLease enter a valid number');
    } else if (guess < 1) {
        alert('PLease enter a number more then 1');
    } else if (guess > 100) {
        alert('PLease enter a number less then 100');
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame(guess)
        } else {
            checkGuess(guess);
            displayGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed it right`)
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Number is TOO Low`)
    } else if (guess > randomNumber) {
        displayMessage(`Number is TOO High`)
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameBtn = document.getElementById("newGame")
    newGameBtn.addEventListener("click", function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;
    })
}

```

## Projact 5

```javascript

const insert = document.getElementById('insert')


window.addEventListener("keydown", (e) => {
    insert.innerHTML = `
   <table class="table">
  <thead>
    <tr>
      <th scope="col">Key</th>
      <th scope="col">key Code</th>
      <th scope="col">Keyn Color</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
  </tbody>
</table>

    `
})

```



## Project 6

```javascript



const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;

}



let interval;
const startColor = function () {
    
    if(!interval){
        interval = setInterval(changBgColor, 1000)
    }
    
    
    
    function changBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
}


const stopColor = function () {
    clearInterval(interval)
    interval = nall;
}



document.getElementById("start").addEventListener("click", startColor)
document.getElementById("stop").addEventListener("click", stopColor)

```