
// Define an object to hold holidays for each month
var holidays = {
    1: ["New Year's Day", "Martin Luther King Jr. Day"],
    2: ["Groundhog Day", "Valentine's Day"],
    3: ["St. Patrick's Day", "Easter"],
    4: ["April Fools' Day", "National Peanut Butter and Jelly Day"],
    5: ["Memorial Day", "Kentucky Derby Day"],
    6: ["Flag Day", "Father's Day"],
    7: ["Independence Day", "Canada Day"],
    8: ["National Hot Dog Day", "National Mountain Climbing Day"],
    9: ["Labor Day", "Oktoberfest"],
    10: ["Halloween", "Boss's Day"],
    11: ["Veterans Day", "Thanksgiving Day"],
    12: ["Christmas Day", "New Year's Eve"]
};

var x1 = "";
var x2 = "";

function disHoliday() {


    for (var month in holidays) {
        if (holidays.hasOwnProperty(month)) {
            var monthInt = parseInt(month)
            switch (monthInt) {
                case 1:
                    x1 =  holidays[month][0] + "<br>";
                    x2 = holidays[month][1] + "<br>";
                    document.getElementById("d1").innerHTML = x1
                    document.getElementById("d2").innerHTML = x2
                    break;
                case 2:
                    x1 =  holidays[month][0] + "<br>";
                    x2 = holidays[month][1] + "<br>";
                    document.getElementById("d3").innerHTML = x1
                    document.getElementById("d4").innerHTML = x2
                    break;
                case 3:
                    x1 =  holidays[month][0] + "<br>";
                    x2 = holidays[month][1] + "<br>";
                    document.getElementById("d5").innerHTML = x1
                    document.getElementById("d6").innerHTML = x2
                    break;
                case 4:
                    x1 =  holidays[month][0] + "<br>";
                    x2 = holidays[month][1] + "<br>";
                    document.getElementById("d7").innerHTML = x1
                    document.getElementById("d8").innerHTML = x2
                    break;
                case 5:
                    x1 =  holidays[month][0] + "<br>";
                    x2 = holidays[month][1] + "<br>";
                    document.getElementById("d9").innerHTML = x1
                    document.getElementById("d10").innerHTML = x2
                    break;
                case 6:
                    x1 =  holidays[month][0] + "<br>";
                    x2 = holidays[month][1] + "<br>";
                    document.getElementById("d11").innerHTML = x1
                    document.getElementById("d12").innerHTML = x2
                    break;
                case 7:
                    x1 =  holidays[month][0] + "<br>";
                    x2 = holidays[month][1] + "<br>";
                    document.getElementById("d13").innerHTML = x1
                    document.getElementById("d14").innerHTML = x2
                    break;
                case 8:
                    x1 =  holidays[month][0] + "<br>";
                    x2 = holidays[month][1] + "<br>";
                    document.getElementById("d15").innerHTML = x1
                    document.getElementById("d16").innerHTML = x2
                    break;
                case 9:
                    x1 =  holidays[month][0] + "<br>";
                    x2 = holidays[month][1] + "<br>";
                    document.getElementById("d17").innerHTML = x1
                    document.getElementById("d18").innerHTML = x2
                    break;
                case 10:
                    x1 =  holidays[month][0] + "<br>";
                    x2 = holidays[month][1] + "<br>";
                    document.getElementById("d19").innerHTML = x1
                    document.getElementById("d20").innerHTML = x2
                    break;
                case 11:
                    x1 =  holidays[month][0] + "<br>";
                    x2 = holidays[month][1] + "<br>";
                    document.getElementById("d21").innerHTML = x1
                    document.getElementById("d22").innerHTML = x2
                    break;
                case 12:
                    x1 =  holidays[month][0] + "<br>";
                    x2 = holidays[month][1] + "<br>";
                    document.getElementById("d23").innerHTML = x1
                    document.getElementById("d24").innerHTML = x2
                    break;
            }
        }
    }

}

disHoliday();
