console.log("Up and running!");

var cardsInPlay = [];
var cards = [
  {
    rank : "Queen",
    suit : "Hearts",
    cardImage : "images/queen-of-hearts.png"
  },
  {
    rank : "Queen",
    suit : "Diamond",
    cardImage : "images/queen-of-diamonds.png"
  },
  {
    rank : "King",
    suit : "Hearts",
    cardImage : "images/king-of-hearts.png"
  },
  {
    rank : "King",
    suit : "Diamond",
    cardImage : "images/king-of-diamonds.png"
  }
];

var checkForMatch = function () {
  if (cardsInPlay[0] === cardsInPlay[1]){
    console.log("You found a match!");
  }
  else if (cardsInPlay[0] != cardsInPlay[1]){
    console.log("Sorry, try again.");
  }
};

var flipCard = function (cardId) {
  console.log("User flipped " + cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
  cardsInPlay.push(cards[cardId].rank);
  console.log(cardsInPlay);
  if (cardsInPlay.length === 2) {checkForMatch()}
};
