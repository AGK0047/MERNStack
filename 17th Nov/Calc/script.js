var firstNum = "";
var secondNum = "";
var action = "";

function press1() {
    var x = document.getElementById("screen").value;
    document.getElementById("screen").value = x + "1";
}
function press2() {
    var x = document.getElementById("screen").value;
    document.getElementById("screen").value = x + "2";
}
function press3() {
    var x = document.getElementById("screen").value;
    document.getElementById("screen").value = x + "3";
}
function press4() {
    var x = document.getElementById("screen").value;
    document.getElementById("screen").value = x + "4";
}
function press5() {
    var x = document.getElementById("screen").value;
    document.getElementById("screen").value = x + "5";
}
function press6() {
    var x = document.getElementById("screen").value;
    document.getElementById("screen").value = x + "6";
}
function press7() {
    var x = document.getElementById("screen").value;
    document.getElementById("screen").value = x + "7";
}
function press8() {
    var x = document.getElementById("screen").value;
    document.getElementById("screen").value = x + "8";
}
function press9() {
    var x = document.getElementById("screen").value;
    document.getElementById("screen").value = x + "9";
}
function press0() {
    var x = document.getElementById("screen").value;
    document.getElementById("screen").value = x + "0";
}
function pressDot() {
    var x = document.getElementById("screen").value;
    document.getElementById("screen").value = x + ".";
}
function pressPlus() {
    firstNum = document.getElementById("screen").value;
    action = "+";
    document.getElementById("screen").value = "";
}
function pressMinus() {
    firstNum = document.getElementById("screen").value;
    action = "-";
    document.getElementById("screen").value = "";
}
function pressMul() {
    firstNum = document.getElementById("screen").value;
    action = "*";
    document.getElementById("screen").value = "";
}
function pressDiv() {
    firstNum = document.getElementById("screen").value;
    action = "/";
    document.getElementById("screen").value = "";
}
function doEqual() {
    secondNum = document.getElementById("screen").value;
    var result = 0;
    
    var n1 = Number(firstNum);
    var n2 = Number(secondNum);

    if (action == "+") {
        result = n1 + n2;
    }
    if (action == "-") {
        result = n1 - n2;
    }
    if (action == "*") {
        result = n1 * n2;
    }
    if (action == "/") {
        result = n1 / n2;
    }

    document.getElementById("screen").value = result;
}