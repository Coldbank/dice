var n1 = Math.floor(Math.random()*6) + 1;
var n2 = Math.floor(Math.random()*6) + 1;

var diceImg1 = "img/dice" + n1 + ".png";
var diceImg2 = "img/dice" + n2 + ".png";

document.querySelector(".img1").setAttribute("src",diceImg1);
document.querySelector(".img2").setAttribute("src",diceImg2);

if (n1 > n2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (n2 > n1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
  document.querySelector("h1").innerHTML = "Draws!";
}
