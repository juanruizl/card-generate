import "bootstrap";
import "./style.css";
window.onload = function() {
  generateRandomCard();
};

document
  .getElementById("newCardBtn")
  .addEventListener("click", generateRandomCard);
document.getElementById("resizeCardBtn").addEventListener("click", resizeCard);

function generateRandomCard() {
  const cardElement = document.getElementById("card");
  const suits = ["heart", "diamond", "spade", "club"];
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];
  cardElement.className = `card-container ${randomSuit}`;
  cardElement.innerHTML = `
    <div class="top-suit">${getSuitSymbol(randomSuit)}</div>
    <div class="card-value">${randomValue}</div>
    <div class="bottom-suit">${getSuitSymbol(randomSuit)}</div>
  `;
}

function getSuitSymbol(suit) {
  switch (suit) {
    case "heart":
      return "♥";
    case "diamond":
      return "♦";
    case "spade":
      return "♠";
    case "club":
      return "♣";
  }
}

function resizeCard() {
  const width = document.getElementById("widthInput").value;
  const height = document.getElementById("heightInput").value;
  const cardElement = document.getElementById("card");

  if (width && height) {
    cardElement.style.width = `${width}px`;
    cardElement.style.height = `${height}px`;
  }
}
