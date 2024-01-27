// Global Variables
//  global variables are declared with var
//  local variables are declared wih let
//  
var name1 = "Meri";
const taxRate = .07; // This is a constant
// myName = "Kaitlyn Clay" - Allowed but frowned upon

function names() {

    //fix the errors
    var firstName = "Meredith",
        lastName = "Engel";
    document.getElementById("name").innerHTML = name1;
    document.getElementById("full-name").innerHTML = firstName + " " + lastName;
    var firstName = "Doctor";
    var name = "Beba";
    document.getElementById("first").innerHTML = name;
    document.getElementById("nick-name").innerHTML = firstName;

}

function scope() {
    //fix the errors
    var name = "Beba";
    var firstName = "Meredith",
        lastName = "Engel";
    document.getElementById("global").innerHTML = name;
    document.getElementById("local").innerHtml = firstName;
    document.getElementById("tax").innerHTML = taxRate;
    document.getElementById("new-tax").innerHTML = taxRate;
}

function letMe() {
    // Fix the errors
    var dog1 = "Ollie";
    var dog2 = "Nessie";
    var dog3 = "Paisley";
    var dog2;
    document.getElementById("dog1").innerHTML = dog1;
    document.getElementById("dog2").innerHTML = dog2;
    document.getElementById("dog3").innerHTML = dog3;
    var dog2 = "Shantih"
    document.getElementById("dog1-2").innerHTML = dog2;
}

function constants() {
    // fix the errors
    const PI = 3.14;
    const dogs = ["Ollie", "Nessie", "Ory"];
    document.getElementById("doggos").innerHTML = dogs;
    dogs[0] = "Ollie Bear";
    const breed = ["Shepherd", "Collie", "Bouvier"];
    document.getElementById("pi").innerHTML = PI;
    document.getElementById("new-doggos").innerHTML = dogs;
    document.getElementById("breeds").innerHTML = breed;
}

function myMath() {
    // create statements demonstrating the use of each operator
    var a = 2;
    var b = 4;
    var c = 10;
    let add = c + b;
    let subtract = b - a;
    let multi = a * c;
    let divide = c / a;
    let expo = b ** a;
    let remain = c % b;
    b++;
    let incre = b;
    c--;
    let decre = c;
    document.getElementById("addition").innerHTML = add;
    document.getElementById("subtraction").innerHTML = subtract;
    document.getElementById("multiplication").innerHTML = multi;
    document.getElementById("exponent").innerHTML = expo;
    document.getElementById("division").innerHTML = divide;
    document.getElementById("modulus").innerHTML = remain;
    document.getElementById("increment").innerHTML = incre;
    document.getElementById("decrement").innerHTML = decre;    
}

function assignments() {
    // create statements demonstrating the use of each assignment type
    var x = 10
    document.getElementById("equals").innerHTML = "x = 10    " + "x = " + x;
    x += 1
    document.getElementById("plus-equals").innerHTML = "x += 1    " + "x = " + x;
    x -= 3
    document.getElementById("minus-equals").innerHTML = "x -= 1    " + "x = " + x;
    x *= 5
    document.getElementById("times-equals").innerHTML = "x *= 1    " + "x = " + x;
    x /= 2
    document.getElementById("divide-equals").innerHTML = "x /= 1    " + "x = " + x;
    x %= 6
    document.getElementById("modulus-equals").innerHTML = "x %= 1    " + "x = " + x;
}

function dataTypes() {
    // create samples of each of the data types from the
    // index page and display them in the Data Types section
    const horses = ["Morgan", "Fresian", "Arabian", "Hanovarian", "Shire"]
    const descript = {hh:"16.3 hh", age:"18 years old", name:"Cruiser"}
    document.getElementById("array").innerHTML = horses;
    document.getElementById("object").innerHTML = descript.name + " is " + descript.age + " and " + descript.hh;


}
