let deck = [
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  6,
  6,
  6,
  6,
  7,
  7,
  7,
  7,
  8,
  8,
  8,
  8,
  9,
  9,
  9,
  9,
  10,
  10,
  10,
  10,
  11,
  11,
  11,
  11,
  12,
  12,
  12,
  12,
  13,
  13,
  13,
  13,
  14,
  14,
  14,
  14
];

let playPile = [];
let result;
let playerGuess = input.value;
const strtBtn = document.querySelector("#strt-btn");
//draw cards to player hand and update deck

function drawRandomCard() {
  randomNumber = Math.floor(Math.random() * deck.length);
  playPile.push(deck[randomNumber]);
  deck.splice(randomNumber, 1);
}
//player guess higher or lower than playPile

function playGame(playerGuess) {
  //Main game
  //draw card
  drawRandomCard();
  //draw card
  //if playPile[1] == playPile[0] result = "draw"
  //draw event
  //if playpile[1] > playPile[0] result = "higher"
  //if playpile[1] < playPile[0] result = "lower"

  //if player guess == result win hooray
  //if player guess !== result lose hooray
}
