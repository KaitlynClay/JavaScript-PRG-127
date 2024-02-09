function start() {

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Your Name Here"
        

    /* JS Numbers: https://www.w3schools.com/js/js_numbers.asp
        We will focus on the things with numbers that are significantly
        different than python. Please read the page linked to above before 
        completing the following:
    */

    /* Write a line of code demonstrating what will happen if
       you try to add a number and a string. Print to the add paragraph to 
       display both the equation and the results. 
    */
    num = 5;
    str = "string";
    add = num + str;
    document.getElementById("add").innerHTML = "5 + string = " + add;


    /*
        JS Number Methods: https://www.w3schools.com/js/js_number_methods.asp
    */

    // Demonstrate the use of toString() and print to the to-string paragraph
    strNum = (38).toString();
    document.getElementById("to-string").innerHTML = strNum;

    // Demonstrate the use of toExponential() and print to the exponent paragraph
    exNum = (100089).toExponential(3);
    document.getElementById("exponent").innerHTML = exNum;

    // Demonstrate the use of toFixed() and print to the fixed paragraph
    fixNum = (98.9687).toFixed(2);
    document.getElementById("fixed").innerHTML = fixNum;

    // Demonstrate the use of toPrecision() and print to the precision paragraph
    precNum = (6.58913).toPrecision(3);
    document.getElementById("precision").innerHTML = precNum;

    // Demonstrate the use of parseFloat() and print to the float paragraph
    floNum = parseFloat("11.75 hours");
    document.getElementById("float").innerHTML = floNum;

    // Demonstrate the use of parseInt() and print to the int paragraph
    intNum = parseInt("16 days");
    document.getElementById("int").innerHTML = intNum;


    // Watch Simple Comparisons: https://www.linkedin.com/learning/learning-the-javascript-language-2/simple-comparisons?autoplay=true&resume=false&u=69317474

    /* In the equals paragraph explain your understanding of the difference between using == and ===  (You will probably
    need to do an additional web search to really get it.)
    */
    document.getElementById("equals").innerHTML = "The == (equality operator) converts the variables to the same type before comparing. Whereas the === (strict equality operator) compares with out converting, so teh value and type has to be the same vs just the value.";

    // Watch Arithmetic Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/arithmetic-operators?autoplay=true&resume=false&u=69317474
    // Watch Logical Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // In the logic paragraph describe the order of precedence for and / or operators
    document.getElementById("logic").innerHTML = "The and operator has a higher precedence than the or operator and both are evaluated from left to right. When comparing multiple and statements all of the comparisons have to be true to have the statement return true. When comparing multiple or statements it will return true if any of the comparisons return true.";


    // Watch Conditional If: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // Watch Conditionals Switch: https://www.linkedin.com/learning/learning-the-javascript-language-2/conditionals-switch?autoplay=true&resume=false&u=69317474


    // Write code to demonstrate the use of the switch statement and display results to switch paragrah
    var state = 2;
    var anType;

    switch (state) {
        case 1:
            anType = "dog";
            break;
        case 2:
            anType = "horse";
            break;
        case 3:
            anType = "goldfish";
            break;
        case 4:
            anType = "cat";
            break;
        case 5:
            anType = "parrot";
            break;
    }

    document.getElementById("switch").innerHTML = anType;

    // Watch Terse ifs: https://www.linkedin.com/learning/learning-the-javascript-language-2/terse-ifs?autoAdvance=true&autoSkip=true&autoplay=true&resume=false&u=69317474
    // Watch Ternary Operator:https://www.linkedin.com/learning/learning-the-javascript-language-2/ternary-operator?autoplay=true&resume=false&u=69317474
    // Write code to demonstrate the use of the ternary operator and print to the ternary paragraph
    let age = 20;
    let message = (age >= 21) ? "You are old enough to drink!" : "You are not old enough to drink";

    document.getElementById("ternary").innerHTML = message;
            
}