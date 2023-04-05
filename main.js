/*----- constants -----*/
//placement of cards
const board = document.querySelector('#board');

/*----- state variables -----*/
//number of matches
let livesRemaining;
let cards;
let clicked;
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

//The browser will initailize and begin a game state automatically

// I will need 16 cards to be showing face down when the game begins

// they will all need to be clickable

// the user will be able to select no more than two cards at a time
