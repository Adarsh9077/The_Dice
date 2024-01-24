alert("Training and Practice purpose")
document.addEventListener("DOMContentLoaded", function () {
  // Add an event listener to the button
document.getElementById("myButton").addEventListener("click", function () {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6

    var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1-dice6.png

    var randomImageSource = "images/" + randomDiceImage; //images/dice1 - dice6.png

    var image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", randomImageSource);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6

    var randomDiceImage1 = "dice" + randomNumber2 + ".png"; //dice1-dice6.png

    var randomImageSource1 = "images/" + randomDiceImage1; //images/dice1 - dice6.png

    var image2 = document.querySelectorAll("img")[1];

    image2.setAttribute("src", randomImageSource1);

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩 Player1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player2 Wins! 🚩";
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }

    });
});
