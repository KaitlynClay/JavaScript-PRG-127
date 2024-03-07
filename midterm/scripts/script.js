// Variables
const hairColor = ["Black", "Brown", "Blonde", "Red", "Auburn", "Chestnut", "White/Gray", 'Strawberry Blonde', 'Dirty Blonde', 'Light Brown', 'Dark Brown', 'Sandy Blonde', 'Ash Blonde', 'Platinum Blonde'];
const eyeColor = ["Brown", "Blue", "Green", "Hazel", "Gray", "Amber", "Black", "Violet"];
const storyGenre = [ "Fantasy", "Science Fiction", "Mystery", "Thriller", "Romance", "Historical Fiction", "Adventure", "Young Adult", "Graphic Novel", "Dystopian", "Children's", "Humor", "Suspense", "Crime", "Western"];

function genAttributes() {
    // getting random values from the arrays
    const ranHair = hairColor[Math.floor(Math.random() * hairColor.length)];
    const ranEye = eyeColor[Math.floor(Math.random() * eyeColor.length)];
    const ranStory = storyGenre[Math.floor(Math.random() * storyGenre.length)];

    const genNumber = Math.floor(Math.random() * 2) + 1;
    const vilNumber = Math.floor(Math.random() * 2) + 1;
    const powNumber = Math.floor(Math.random() * 2) + 1;

    // determining gender
    var gender = ""
    if (genNumber === 1) {
        gender = "female";
    } else if (genNumber === 2) {
        gender = "male";
    } else {
        gender = "Error: The random number is out of range";
    }

    // determining hero or villain
    var vil = ""
    if (vilNumber === 1) {
        vil = "hero";
    } else if (vilNumber === 2) {
        vil = "villain";
    } else {
        vil ="Error: The random number is out of range";
    }

    // determining powers
    var power = ""
    if (powNumber === 1) {
        power = "has powers";
    } else if (powNumber === 2) {
        power = "does not have powers";
    } else {
        power = "Error: The random number is out of range";
    }

    const ranAge = genRanAge();

    const letter1 = ranLetter();
    const letter2 = ranLetter();
    const letter3 = ranLetter();
    
    // setting everything to the HTML
    document.getElementById("hColor").innerHTML = `Hair Color: ${ranHair}`;
    document.getElementById("eColor").innerHTML = `Eye Color: ${ranEye}`;
    document.getElementById("sGenre").innerHTML = `Story Genre: ${ranStory}`;
    document.getElementById("initials").innerHTML = `Initials: ${letter1}. ${letter2}. ${letter3}.`;
    document.getElementById("gender").innerHTML = `Gender: ${gender}`;
    document.getElementById("charAge").innerHTML = `Character's Age: ${ranAge}`;
    document.getElementById("vil").innerHTML = `Villain or Hero: ${vil}`;
    document.getElementById("pow").innerHTML = `Powers: ${power}`;
    
}

// generating a random age
function genRanAge() {
    return Math.floor(Math.random() * (118 - 5 + 1)) + 5;
}

// generating random letters for the initials
function ranLetter() {
    const randomIndex = Math.floor(Math.random() * 26);
    const randomCharCode = 97 + randomIndex;
    return String.fromCharCode(randomCharCode).toUpperCase();
}

// having the button trigger the main function
const genButton = document.getElementById("genBtn");
genButton.addEventListener("click", genAttributes);
