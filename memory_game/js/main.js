console.log("Up and running!");

var cardsInPlay = [];
var cards = ["queen", "queen", "king", "king"];
var cardOne = cards[0];
var cardTwo = cards[2];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);
if (cardsInPlay >= 2){}
else if (cardOne === cardTwo){alert("You found a match!");}
else if (cardOne != cardTwo){alert("Sorry, try again")}