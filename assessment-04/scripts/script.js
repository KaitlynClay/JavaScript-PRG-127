
var ranNum = Math.floor(Math.random() * 1001);
var maniBox = document.getElementById("box");
var frig = "#AAFBFF";
var cool = "#FFCE00";
var hot = "#CF0404";
var winner = "#16B400"

alert(ranNum); //testing. lets you know what number is for guessing

document.getElementById("submit").addEventListener("click", function (event) {
    var guessNum = document.getElementById("guess").value;
    calcGuess(guessNum);
})


function calcGuess(guess) {
    if (guess >= (ranNum + 300) || guess <= (ranNum - 300)) {
        maniBox.style.background = frig
        maniBox.innerHTML = "Frigid"
    } else if (guess >= (ranNum + 100) || guess <= (ranNum - 100)) {
        maniBox.style.background = cool
        maniBox.innerHTML = "Cool"
    } else if (guess >= (ranNum + 1) || guess <= (ranNum - 1)) {
        maniBox.style.background = hot
        maniBox.innerHTML = "Hot"
    } else {
        maniBox.style.background = winner
        maniBox.innerHTML = "You Won!!!"
    }
}