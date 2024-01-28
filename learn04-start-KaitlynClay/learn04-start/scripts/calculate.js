function addDate() {
    let today = new Date();
    document.getElementById("myDate").innerHTML = today;
    document.getElementById("name").value = "";
    document.getElementById("rm1length").value = "";
    document.getElementById("rm1width").value = "";
    document.getElementById("rm1height").value = "";
    document.getElementById("rm1cost").value = "";
    document.getElementById("rm2length").value = "";
    document.getElementById("rm2width").value = "";
    document.getElementById("rm2height").value = "";
    document.getElementById("rm2cost").value = "";
    document.getElementById("rm3length").value = "";
    document.getElementById("rm3width").value = "";
    document.getElementById("rm3height").value = "";
    document.getElementById("rm3cost").value = "";
}

function estimate() {

    let name = document.getElementById("name").value;
    var room = document.getElementById("rooms").value
    var cost1 = 0
    var cost2 = 0
    var cost3 = 0
    document.getElementById("room2").style.display = "none";
    document.getElementById("room3").style.display = "none";

    let length1 = parseFloat(document.getElementById("rm1length").value);
    let width1 = parseFloat(document.getElementById("rm1width").value);
    let height1 = parseFloat(document.getElementById("rm1height").value);
    let totalSqFt1 = ((length1 * height1 * 2) + (length1 * width1 * 2));
    cost1 = (totalSqFt1 * .65);
    
    let length2 = parseFloat(document.getElementById("rm2length").value);
    let width2 = parseFloat(document.getElementById("rm2width").value);
    let height2 = parseFloat(document.getElementById("rm2height").value);
    let totalSqFt2 = ((length2 * height2 * 2) + (length2 * width2 * 2));
    cost2 = (totalSqFt2 * .65);

    let length3 = parseFloat(document.getElementById("rm3length").value);
    let width3 = parseFloat(document.getElementById("rm3width").value);
    let height3 = parseFloat(document.getElementById("rm3height").value);
    let totalSqFt3 = ((length3 * height3 * 2) + (length3 * width3 * 2));
    cost3 = (totalSqFt3 * .65);


    if (room == 1) {
        document.getElementById("rm1cost").value = cost1;
    } else if (room == 2) {
        document.getElementById("room2").style.display = "block";
        document.getElementById("rm1cost").value = cost1;
        document.getElementById("rm2cost").value = cost2;
    } else {
        document.getElementById("room2").style.display = "block";
        document.getElementById("room3").style.display = "block";
        document.getElementById("rm1cost").value = cost1;
        document.getElementById("rm2cost").value = cost2;
        document.getElementById("rm3cost").value = cost3;
    }

    var totalCost = cost1 + cost2 + cost3;
    document.getElementById("estimate").innerHTML = (name + ", your estimate is $" + totalCost)
}







// function addDate() {
//     let today = new Date();
//     document.getElementById("myDate").innerHTML = today;
//     document.getElementById("name").value = "";
//     document.getElementById("rm1length").value = "";
//     document.getElementById("rm1width").value = "";
//     document.getElementById("rm1height").value = "";
//     document.getElementById("rm1cost").value = "";
//     document.getElementById("rm2length").value = "";
//     document.getElementById("rm2width").value = "";
//     document.getElementById("rm2height").value = "";
//     document.getElementById("rm2cost").value = "";
//     document.getElementById("rm3length").value = "";
//     document.getElementById("rm3width").value = "";
//     document.getElementById("rm3height").value = "";
//     document.getElementById("rm3cost").value = "";
// }

// function estimate() {

//     let name = document.getElementById("name").value;
//     var room = 1
//     var room = document.getElementById("rooms").value
//     var cost1 = 0
//     var cost2 = 0
//     var cost3 = 0
//     document.getElementById("room2").style.display = "none";
//     document.getElementById("room3").style.display = "none";
//     if (room == 1) {
//         // alert("num 1")
//         let length1 = parseFloat(document.getElementById("rm1length").value);
//         let width1 = parseFloat(document.getElementById("rm1width").value);
//         let height1 = parseFloat(document.getElementById("rm1height").value);
//         let totalSqFt1 = ((length1 * height1 * 2) + (length1 * width1 * 2));
//         cost1 = (totalSqFt1 * .65);
//         document.getElementById("rm1cost").value = cost1;
//     } else if (room == 2) {
//         // alert("num 2")
//         document.getElementById("room2").style.display = "block";
//         let length2 = parseFloat(document.getElementById("rm2length").value);
//         let width2 = parseFloat(document.getElementById("rm2width").value);
//         let height2 = parseFloat(document.getElementById("rm2height").value);
//         let totalSqFt2 = ((length2 * height2 * 2) + (length2 * width2 * 2));
//         cost2 = (totalSqFt2 * .65);
//         document.getElementById("rm1cost").value = cost1;
//         document.getElementById("rm2cost").value = cost2;
//     } else {
//         document.getElementById("room2").style.display = "block";
//         document.getElementById("room3").style.display = "block";
//         let length3 = parseFloat(document.getElementById("rm3length").value);
//         let width3 = parseFloat(document.getElementById("rm3width").value);
//         let height3 = parseFloat(document.getElementById("rm3height").value);
//         let totalSqFt3 = ((length3 * height3 * 2) + (length3 * width3 * 2));
//         cost3 = (totalSqFt3 * .65);
//         document.getElementById("rm1cost").value = cost1;
//         document.getElementById("rm2cost").value = cost2;
//         document.getElementById("rm3cost").value = cost3;
//     }
        
//     // document.getElementById("rm1cost").value = cost1;
//     // document.getElementById("rm2cost").value = cost2;
//     // document.getElementById("rm3cost").value = cost3;

//     var totalCost = cost1 + cost2 + cost3;
//     document.getElementById("estimate").innerHTML = (name + ", your estimate is $" + totalCost)
// }