'use strict';

//Selecting the element
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const currentEl = function (activePlayer) {
    return document.getElementById(`current--${activePlayer}`);
}
const scoreEl = function (activePlayer) {
    return document.getElementById(`score--${activePlayer}`);
}
const diceImg = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const btnRegeln = document.querySelector('.btn--regeln');
const showRegeln = document.querySelector('.anweisung');
const overlay = document.querySelector('.overlay');
//Settting default score 0
score0El.textContent = 0;
score1El.textContent = 0;
diceImg.classList.add('hidden');
//Funcktion set everything in default
const setStart = function () {
    score0El.textContent = 0;
    score1El.textContent = 0;
    diceImg.classList.add('hidden');
    currentEl(0).textContent = 0;
    currentEl(1).textContent = 0;
    scores[0] = 0;
    scores[1] = 0;
    currentScore = 0;
    activePlayer = 0;
    play = true;
    player0.classList.add('player--active');
    player1.classList.remove('player--active')
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
}

//initializie 
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let play = true;
//Switching player
const switchPlayer = function () {
    if (play) {
        //Setting the curent player in default
        scores[activePlayer] += currentScore;
        scoreEl(activePlayer).textContent = scores[activePlayer];
        currentScore = 0;
        currentEl(activePlayer).textContent = 0;
        //Functionality for Hold Button
        if (scores[activePlayer] >= 30) {
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            player0.classList.remove('player--active');
            player1.classList.remove('player--active');
            play = false;
        } else {
            //Switch in next player
            activePlayer = (activePlayer === 0) ? 1 : 0;
            player0.classList.toggle('player--active');
            player1.classList.toggle('player--active');
        }
    }
}
//Functionality Roll Button
btnRoll.addEventListener('click', function () {
    if (play) {
        //Generating a Random dice
        const dice = Math.trunc(Math.random() * 5) + 1;
        diceImg.classList.remove('hidden');
        diceImg.src = `dice-${dice}.png`;

        //Set current score  player
        if (dice !== 1) {
            currentScore += dice;
            currentEl(activePlayer).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
})

//Funktion Hold Button
btnHold.addEventListener('click', function () {
    if (play) {
        switchPlayer();
    }
})

//Funktion New Game 
btnNew.addEventListener('click', setStart);

// //Funktion Regeln Button
// btnRegeln.addEventListener('click', function () {
//     showRegeln.classList.remove('hidden');
//     overlay.classList.remove('hidden');
// })

