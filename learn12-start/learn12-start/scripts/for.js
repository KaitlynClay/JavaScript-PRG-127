// for loop - https://www.w3schools.com/js/js_loop_for.asp
// Write 99 bottles of beer on the wall using a for loop
// hints - decrement at the end, create a variable, save the song lyrics from
// the loop to the variable. use <br> instead of \n with the inner html. 
    

function genSong() {
    var song = ""

    for (var bottles = 99; bottles > 0; bottles--) {
        song += bottles + " bottle" + (bottles !== 1 ? "s" : "") + " of beer on the wall, ";
        song += bottles + " bottle" + (bottles !== 1 ? "s" : "") + " of beer.<br>";
        song += "Take one down and pass it around, ";
        song += (bottles - 1 === 0 ? "no more" : bottles - 1) + " bottle" + (bottles - 1 !== 1 ? "s" : "") + " of beer on the wall.<br><br>";
    } 
    song += "No more bottles of beer on the wall, no more bottles of beer.<br>";
    song += "Go to the store and buy some more to get 99 bottles of beer on the wall.";

    document.getElementById("beer").innerHTML = song;
}

genSong()


//for in: https://www.w3schools.com/js/js_loop_forin.asp
// create an array of months and use the for in
// command to print them to the for-in paragraph

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var mon = "";
for (let x in months) {
    mon += months[x] + ", ";
    document.getElementById("for-in").innerHTML = mon;
}


// For of: https://www.w3schools.com/js/js_loop_forof.asp
// demonstrate the use of For Of to print letters from a string.
// Create your own string variable of at least 5 letters
// print the results in the for-of paragraph

let word = "Franches-Montagnes";
var letter = "";
for (let x of word) {
    letter += x + "<br>";
    document.getElementById("for-of").innerHTML = letter;
}


// While loop: https://www.w3schools.com/js/js_loop_while.asp
// Create a while loop to print the numbers 1 to 50
// print the results in the while paragraph

let num = 1;
var x = "";
while (num <= 50) {
    x += num + ", ";
    num++;
    document.getElementById("while").innerHTML = x;
}