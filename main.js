/*----- constants -----*/
const board = document.querySelector('#board');
const cards = document.querySelectorAll('.flip-card')
const displayMessage = document.querySelector('#message')
const playAgainBtn = document.querySelector('button');
/*----- state variables -----*/
let chosen = []; 
let matched = 0;
let flip = 0;
let lost;
let turns;
let livesRemaining = 5;
let message;
// let winner = false;
/*----- event listeners -----*/
//a click on any of the cards will result in it flipping
board.addEventListener('click', flipCard);
playAgainBtn.addEventListener('click', function() {
    window.location.reload()
});
/*----- functions -----*/
//this sets up the game when it loads in the browser
initialize();

function initialize(){
  livesRemaining = 5;
  firstCard = null;
  secondCard = null;  
} 

// function render() {
//     //render win/loss message
//     renderMessage();
// }

 //calling the funciton when a card is clicked
 function flipCard(evt) {
    
     const cardContainer = evt.target.closest('.flip-card-inner');
     // if the container was found and the card hasn't been flipped yet and less than two cards are chosen
     if (cardContainer && !cardContainer.classList.contains('flipped') && chosen.length < 2) {
          // flip the card by rotating it 180 degrees
         cardContainer.style.transform = 'rotateY(180deg)';
         // then mark the card as flipped
         cardContainer.classList.add('flipped');
         // add the card's id to the list of chosen cards
         chosen.push(cardContainer);
         // increase the flip count by one
         flip++;

         // If two cards have been chosen, wait for a short delay and check if they match
         if (chosen.length === 2) {
           setTimeout(checkMatch, 1000);
 
        }

    }
 }

//function to check if a match is found
 function checkMatch() {
  const cards =  document.querySelectorAll('.flip-card-inner');
//   console.log(chosen)
  // get the first and second flipped card
  const firstCard = chosen[0];
  const secondCard = chosen[1];
//   console.log(firstCard.getAttribute('id'))

  //If the id of both cards are the same, add the 'matched' class and increment the matched counter
  if (firstCard.getAttribute('id') === secondCard.getAttribute('id')) {
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
    matched++; // increase the matched counter
    // console.log('match')
  } 
  // else, remove the 'flipped' class from both cards, meaning they will flip back to their original state
  else {
   if (firstCard.getAttribute('id') !== secondCard.getAttribute('id')) //
    firstCard.classList.remove('flipped');
    secondCard.classList.remove('flipped');
    firstCard.style.transform = 'rotateY(0deg)';
    secondCard.style.transform = 'rotateY(0deg)';
    livesRemaining--;
    console.log(livesRemaining)
  }
  if (livesRemaining === 0) {
    displayMessage.textContent = "Your luck has run out! Try again!"
  }
    // console.log('0 lives')

  // Empty the chosen array so the player can choose new cards to flip
  chosen = [];
}


// function renderMessage() {
//  //check if 
//    let allMatchesFound; 

   
//    if (won === )
// }







