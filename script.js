let hexCodeLabel = document.getElementById("hexCode");
let colorBoard = document.getElementById("colorBoard");
let copyCode = document.getElementById("copy");

let hexRang = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    flipCode();
  }
});

function flipCode() {
  let hex = "";
  while (hex.length < 6) {
    hex += hexRang[Math.floor(hexRang.length * Math.random())];
  }

  hexCodeLabel.innerHTML = `#${hex}`;
  colorBoard.style.background = `#${hex}`;
}

window.onload = flipCode();
