console.log("Up and running!");

var cardsInPlay = [];
var cards = ["queen", "queen", "king", "king"];

var checkForMatch = function () {
  if (cardsInPlay[0] === cardsInPlay[1]){
    console.log("You found a match!");
  }
  else if (cardsInPlay[0] != cardsInPlay[1]){
    console.log("Sorry, try again.");
  }
}

var flipCard = function (cardId) {
  console.log("User flipped " + cards[cardId]);
  cardsInPlay.push(cards[cardId]);
  console.log(cardsInPlay)
  if (cardsInPlay.length >= 2) {checkForMatch()}
}
