// declare and initialize array
let game = ["SHIRE", "SHETLAND", "ARABIAN", "MORGAN", "MUSTANG", "APPALOOSA", "BRUMBY", "SADDLEBRED", "RAHVAN", "HAFLINGER"];
let choice = Math.floor(Math.random() * 10);
let answer = game[choice];
let myLength = answer.length;
let display = [myLength];
let win = myLength;
let letters = answer.split('');
let attemptsLeft = 6;
let output = ''; 
let userLetter = '';
let found = false;
let usedLetters = [];


// game setup works fine -- steffen
function setup() {
    alert(answer);
    for (let i = 0; i < answer.length; i++) {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("word").innerHTML = output;
}


function updateImage() {
        let hangmanImage = document.getElementById("hangman");
        let images = ["../images/01.png"]; // Array containing image URLs
        let currentImageIndex = images.length - attemptsLeft; // Index of the current hangman image
        if (currentImageIndex < images.length) {
            hangmanImage.src = images[currentImageIndex]; // Set the src attribute of the image element
        }
}
    

function updateUsedLetters() {
    document.getElementById("guessed").innerHTML = usedLetters.join(', ');
}

document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault();
    output = '';
    userLetter = document.getElementById("guess").value;
    document.getElementById("guess").value = ''; //would this reset value to null

    if (usedLetters.includes(userLetter)) {
        alert("Letter already used!");
        return;
    }

    usedLetters.push(userLetter);
    updateUsedLetters()


    for (let c = 0; c < answer.length; c++) {
        //alert(letters[c]);
        if (userLetter.toUpperCase() == letters[c]) {
            display[c] = userLetter.toUpperCase();
            win--;
            found = true;
        }

        output = output + display[c] + ' ';
    }

    if (found == false) {
        attemptsLeft--;
        // updateImage()
    }
    found = false

    
    if (win < 1) {
    document.getElementById("guesses").innerHTML = 'YOU WIN!!!';
    } else if (attemptsLeft < 1) {
        document.getElementById("guesses").innerHTML = 'YOU LOSE!!!';
    } else {
        document.getElementById("guesses").innerHTML = 'You have ' + attemptsLeft + ' guesses left';
    }
    
    document.getElementById("word").innerHTML = output;
    output = '';

    
});
