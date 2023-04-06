/*----- constants -----*/
//placement of cards
const board = document.querySelector('board');
const cards = document.querySelectorAll('flip-card')
/*----- state variables -----*/
//number of matches
let livesRemaining = 5;
let cardClickOne = 1;
let cardClickTwo = -1;
let clicked = null;
let winner;
let timer;
let matches;

/*----- event listeners -----*/
//a click on any of the cards

//once a user has clicked two cards, they are unable to click anymore 

//a matching pair has been found

//an incompatible pair has been clicked


/*----- functions -----*/
initialize(); //this sets up the game when it loads in the browser

function initailize() {
    winner = null;
    board = [
        [0, 0, 0, 0], // col 0
        [0, 0, 0, 0], // col 1
        [0, 0, 0, 0], // col 2
        [0, 0, 0, 0], // col 3
        [0, 0, 0, 0]  // col 4
     //  r0 r1 r2 r3   
    ];
    render();    
}

function flipCard() {
    this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));
//The browser will initailize and begin a game state automatically

// I will need 16 cards to be showing face down when the game begins

// they will all need to be clickable

// the user will be able to select no more than two cards at a time
