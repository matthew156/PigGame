'use strict';

// SELECTING ELEMENTS
// Element for selecting player 1, we have everything listed as 0
// index because the scores variable is an array
const player0El = document.querySelector('.player--0');
// Variable for selecting player 2
const player1El = document.querySelector('.player--1');
// Player 1's total score for the game
const score0El = document.querySelector('#score--0');
// Player 2's total score for the game
const score1El = document.getElementById('score--1');
// Player 1's score before being adding to the total
const current0El = document.getElementById('current--0');
// Player 2's score before being added to the total
const current1El = document.getElementById('current--1');
// The dice that determines score before being added to total
const diceEl = document.querySelector('.dice');
// Button that creates a new game
const btnNew = document.querySelector('.btn--new');
// The roll button that adds the current score to the game
const btnRoll = document.querySelector('.btn--roll');
// The hold button to add the score to players
const btnHold = document.querySelector('.btn--hold');



// Starting Conditions
let scores = [0, 0];
// Current score set to 0 but will change as dice rolls
let currentScore = 0;
// The active player when 0 it's player 1 when 1 it "toggles" to player 2 SEE line 68 and 69
let activePlayer = 0;
let playing = true;



function newGame () {
// Shows the display for player 1's score
score0El.textContent = 0;
// Shows the display for player 2's score
score1El.textContent = 0;
// Hides the dice on the webpage
diceEl.classList.add('hidden');
// variable scores to hold an array of values for both players (reason why it's player 0  and player 1)
scores = [0, 0];

playing = true;}
;
newGame();

function switchPlayer()
{
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
        player0El.classList.toggle('player--active');
        activePlayer = activePlayer === 0 ? 1 : 0;
        player1El.classList.toggle('player--active');
}






//User rolls dice 
btnRoll.addEventListener('click', function(){
    if(playing) {
    // Random Dice Roll
    const dice = Math.trunc(Math.random() *6) + 1;
    
    // Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    
    // Check for dice roll of 1 if true, switch to next player
    if (dice !== 1)
    {
    // Add the current dice roll to score
     currentScore += dice;
    // Displays the player's current score
     document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }
    else
    {
        // SWITCH TO THE NEXT PLAYER
        switchPlayer();
    
    }
}});

btnHold.addEventListener('click', function()
{
    if(playing)
    {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore

    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    // 2. Check if player's score is >= 100
    if(scores[activePlayer] >= 100)
    {
        // Finish the game
        playing = false
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

    }
    else
    {
    // Switch to the next player
    switchPlayer();
    }}
});


btnNew.addEventListener('click', function(){
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    document.querySelector(`.player--0`).classList.add('player--active');
    current0El.textContent = 0;
    current1El.textContent = 0;
    currentScore = 0;
    newGame();
})
