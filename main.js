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

const resultBox = document.querySelector("#result-box");

const strtBtn = document.querySelector("#strt-btn");
strtBtn.addEventListener("click", drawRandomCard);

let cardBox = document.querySelector("#card-box");
//draw cards to player hand and update deck

const higherBtn = document.querySelector("#guess-higher");
higherBtn.addEventListener("click", playGameHigher);
function playGameHigher() {
  playGame("higher");
}

const lowerBtn = document.querySelector("#guess-lower");
lowerBtn.addEventListener("click", playGameLower);
function playGameLower() {
  playGame("lower");
}

function drawRandomCard() {
  randomNumber = Math.floor(Math.random() * deck.length);
  playPile.push(deck[randomNumber]);
  cardBox.innerText = playPile;
  deck.splice(randomNumber, 1);
}
//fetch dad joke from API
function getJoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json"
    }
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let jokeDiv = document.createElement("div");
      jokeDiv.innerText = data.joke;
      jokeDiv.classList.add("carddeck");
      document.body.appendChild(jokeDiv);
    });
}
//player guess higher or lower than playPile
function checkCards() {
  if (playPile[1] == playPile[0]) {
    result = "draw";
    return result;
    //if playpile[1] > playPile[0] result = "higher"
  } else if (playPile[1] > playPile[0]) {
    result = "higher";
    return result;
    //if playpile[1] < playPile[0] result = "lower"
  } else {
    result = "lower";
    return result;
  }
}

function playGame(playerGuess) {
  console.log("YO");
  //Main game
  //draw card
  drawRandomCard();
  //draw card
  //if player guess == result win hooray
  checkCards();

  if (playerGuess == result) {
    resultBox.innerText = "YOU HAVE MASTERED THE CARDS AND PROVED YOUR WORTH";
    let winBtn = document.createElement("button");
    winBtn.innerText = "CLAIM YOUR PRIZE";
    document.body.appendChild(winBtn);
    winBtn.addEventListener("click", getJoke);
  } else if (playerGuess !== result) {
    resultBox.innerText = "I DON'T KNOW WHAT TO TELL YOU... YOU LOST...GO HOME";
  }
  //if player guess !== result lose hoora
}
