var back_images = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg", "img/7.jpg", "img/8.jpg", "img/9.jpg", "img/10.jpg", "img/11.jpg", "img/12.jpg"]

let card = document.getElementsByClassName("card");
let cards = [...card];

// collects all the 
const deck = document.getElementsByClassName("back");

// array for opened cards
var openedCards = [];

// window reload on startGame and call shuffle card
document.body.onload = startGame();
function startGame() {
	var shuffledCards = Shuffle(back_images);
	console.log(shuffledCards);
	for (var i = deck.length - 1; i >= 0; i--) {
		deck[i].src = shuffledCards[i];
	}
	console.log(shuffledCards);
}

// loop to add event listener to each card
for (var i = cards.length - 1; i >= 0; i--) {
	cards[i].addEventListener("click", displayCard);
}

// to display the card
function displayCard() {
	var child = this.childNodes;
	child[1].classList.add("front");
	child[3].classList.remove("back");

	// adding opened card to an array if not present
	if (!openedCards.includes(this)) {
		openedCards.push(this);
	}
	console.log(openedCards);
	if (openedCards.length == 2) {
		openedCard();
	}
}

// Fisher-Yates (aka Knuth) shuffle 
function Shuffle(Array) {
	var currentIndex = Array.length, tempValue, randIndex;

	while (currentIndex != 0) {
		randIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		tempValue = Array[currentIndex];
		Array[currentIndex] = Array[randIndex];
		Array[randIndex] = tempValue;
	}
	return Array;
}

// to check if matched 
function openedCard() {
	var len = openedCards.length;
	if (len == 2) {
		unmatched();
	}
}

// if unmatched then flip them back
function unmatched() {
	openedCards[0].children[0].classList.remove("front");
	openedCards[0].children[1].classList.add("back");

	openedCards.shift();
}