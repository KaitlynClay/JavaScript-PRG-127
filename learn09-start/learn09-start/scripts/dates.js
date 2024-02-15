/* JavaScript Dates: https://www.w3schools.com/js/js_dates.asp */

// Create a variable, assign it to a new date object
// display the variable in the basic paragraph

var nDO = new Date();
document.getElementById("basic").innerHTML = nDO;

// create a new date variable and load the information for today into it
// display the results in the today paragraph (Year, Month, Day)

var today = new Date();
var year = today.getFullYear();
var month = today.getMonth() + 1;
var day = today.getDate() - 10;
document.getElementById("today").innerHTML = year + "-" + month + "-" + day;

// Create a new date variable based on the dateString and store your birthday in it
// display the variable in the birthday paragraph

bDay = new Date("2005-03-11");
document.getElementById("birthday").innerHTML = bDay;

// Convert your basic date to the ISO string format and display the result
// in the iso paragraph

var iso = new Date();
iso.toISOString()
document.getElementById("iso").innerHTML = iso;

//  Date Formats: https://www.w3schools.com/js/js_date_formats.asp
// Demonstrate 3 date formats of your choice to date1, date2, and date3 paragraphs

var sho = new Date("10/12/2022")
document.getElementById("date1").innerHTML = sho;
var lon = new Date("November 9 2020")
document.getElementById("date2").innerHTML = lon;
var iso2 = new Date("2011")
document.getElementById("date3").innerHTML = iso2;

//  getDate() Methods: https://www.w3schools.com/js/js_date_methods.asp
// Demonstrate 4 get date methods of your choice to get1-get4 paragraphs

var g1 = new Date()
g1.getFullYear()
document.getElementById("get1").innerHTML = g1;
var g2 = new Date()
g2.getMonth()
document.getElementById("get2").innerHTML = g2;
var g3 = new Date()
g3.getDay()
document.getElementById("get3").innerHTML = g3;
var g4 = new Date()
g4.getHours()
document.getElementById("get4").innerHTML = g4;

// set date methods: https://www.w3schools.com/js/js_date_methods_set.asp
// Demonstrate 4 set date methods of your choice to set1-set4 paragraphs

var s1 = new Date()
s1.setMinutes(12)
document.getElementById("set1").innerHTML = s1;
var s2 = new Date()
s2.setHours(16)
document.getElementById("set2").innerHTML = s2;
var s3 = new Date()
s3.setMonth(20)
document.getElementById("set3").innerHTML = s3;
var s4 = new Date()
s4.setDate(4)
document.getElementById("set4").innerHTML = s4;