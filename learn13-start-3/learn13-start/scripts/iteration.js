/*
Iterables: https://www.w3schools.com/js/js_iterables.asp
Read the page
Demonstrate iteration of a list 
Create a list of movies, books, or games at least 5 items long and 
display them in the list paragraph
*/

var books = ["Eragon", "Eldest", "Brisinger", "Inheritance", "Murtagh"];
var book = "";
for (const x of books) {
    book += x + "<br>";
}

document.getElementById("list").innerHTML = book;

/*
JS Sets

https://www.w3schools.com/js/js_sets.asp

Create a set with at least 5 song titles in it
display the contents of the set in the set1 paragraph (use iteration)

*/

var songs = new Set(["I'll Make a Man Out of You", "Colors of the Wind", "Hoist the Colors", "Speechless", "Reflection"]);
var song = "";
for (const x of songs) {
    song += x + "<br>"
}

document.getElementById("set1").innerHTML = song

// add two more songs to the set then display in the set2 paragraph

songs.add("Set Fire to the Rain")
songs.add("Peaky Blinder")

for (const x of songs) {
    song += x + "<br>"
}

document.getElementById("set1").innerHTML = song


/* 
Maps
https://www.w3schools.com/js/js_maps.asp

Maps are like dictionaries in python
Create a map with five names and emails in it.
Display the contents of the map in map1 use the forEach() method (bottom of
    the reference page)
*/

const contact = new Map([["John Doe", "john.doe@example.com"], ["Jane Smith", "jane.smith@example.com"], ["Alice Johnson", "alice.johnson@example.com"], ["Bob Williams", "bob.williams@example.com"], ["Emily Brown", "emily.brown@example.com"]])
let person = ""

contact.forEach(function (value, key) {
    person += key + " = " + value + "<br>"
})

document.getElementById("map1").innerHTML = person

// add two new names and emails and display in map2 use the forEach() method

var person2 = ""
contact.set("Michael Davis", "michael.davis@example.com")
contact.set("Sarah Wilson", "sarah.wilson@example.com")

contact.forEach(function (value, key) {
    person2 += key + " = " + value + "<br>"
})

document.getElementById("map2").innerHTML = person2
    
// get and display the email of one person, display in map3

document.getElementById("map3").innerHTML = contact.get("Bob Williams")