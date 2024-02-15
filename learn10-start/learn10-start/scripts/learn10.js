function start() {
    // Math: https://www.w3schools.com/js/js_math.asp
    // Demonstrate the use of round, ceil, floor, trunc, sign
    // pow, min, and random and display to the appropriate paragraphs

    var round = Math.round(67.856);
    document.getElementById("round").innerHTML = round;
    var ceil = Math.ceil(6.12);
    document.getElementById("ceil").innerHTML = ceil;
    var floor = Math.floor(8.65);
    document.getElementById("floor").innerHTML = floor;
    var trunc = Math.trunc(6.8);
    document.getElementById("trunc").innerHTML = trunc;
    var sign = Math.sign(-94);
    document.getElementById("sign").innerHTML = sign;
    var pow = Math.pow(4, 4)
    document.getElementById("pow").innerHTML = pow;
    var min = Math.min(-56, 21, 99, 530)
    document.getElementById("min").innerHTML = min;
    var random = Math.random()
    document.getElementById("random").innerHTML = random;

    // Random: https://www.w3schools.com/js/js_random.asp
    // create a random integer between 1 and 100 and display in the random2 paragraph
    var random2 = Math.floor(Math.random() * 101)
    document.getElementById("random2").innerHTML = random2;

    // Booleans: https://www.w3schools.com/js/js_booleans.asp
    // read the reference


    // Comparisons: https://www.w3schools.com/js/js_comparisons.asp
    // demonstrate and explain the difference between == and === in the
    // comparisons paragraph
    var comp = "The == operator looks to see if both expressions are equal to each other in a general sense. The === operator looks to see if they are exactly he same, not just equal to each other."
    document.getElementById("comparisons").innerHTML = comp;

    // Conditions: https://www.w3schools.com/js/js_if_else.asp
    // Read the conditions page
}