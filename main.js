/*----- constants -----*/
//placement of cards
const board = document.querySelector('#board');
const cards = document.querySelectorAll('.flip-card')
/*----- state variables -----*/
//number of matches
let chosen = []; 
let matched = 0;
let flip = 0;
let won;
let lost;
let turns;

/*----- event listeners -----*/
//a click on any of the cards will result in it flipping
board.addEventListener('click', flipCard);



//once a user has clicked two cards, they are unable to click anymore 

//a matching pair has been found

//an incompatible pair has been clicked

/*----- functions -----*/
//this sets up the game when it loads in the browser
function initialize(){
    let livesRemaining = 5;
    let winner = false;
} 

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
         chosen.push(cardContainer.dataset.id);
         // increase the flip count by one
         flip++;

         // If two cards have been chosen, wait for a short delay and check if they match
         if (chosen.length === 2) {
           setTimeout(checkMatch, 1000);
        }
     }

 }

//fuction to check if a match is found
function checkMatch() {
  const cards =  document.querySelectorAll('.flip-card-inner');
  // get the first and second flipped card
  const firstCard = cards[0];
  const secondCard = cards[1];

  //If the framework of both cards are the same, add the 'matched' class and increment the matched counter
  if (firstCard.dataset.framework === secondCard.dataset.framework) {
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
    matched++; // increase the matched counter
  } 
  // else, remove the 'flipped' class from both cards, meaning they will flip back to their original state
  else {
    firstCard.classList.remove('flipped');
    secondCard.classList.remove('flipped');
  }

  // Empty the chosen array so the player can choose new cards to flip
  chosen = [];
}

console.log(checkMatch)







