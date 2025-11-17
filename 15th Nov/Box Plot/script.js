
function changeMarginTop() {
    var val = document.getElementById("m-top").value;
    document.getElementById("val-m-top").innerHTML = val + "px";
    document.getElementById("the-box").style.marginTop = val + "px";
}

function changeMarginRight() {
    var val = document.getElementById("m-right").value;
    document.getElementById("val-m-right").innerHTML = val + "px";
    document.getElementById("the-box").style.marginRight = val + "px";
}

function changeMarginBottom() {
    var val = document.getElementById("m-bottom").value;
    document.getElementById("val-m-bottom").innerHTML = val + "px";
    document.getElementById("the-box").style.marginBottom = val + "px";
}

function changeMarginLeft() {
    var val = document.getElementById("m-left").value;
    document.getElementById("val-m-left").innerHTML = val + "px";
    document.getElementById("the-box").style.marginLeft = val + "px";
}

function changeBorder() {
    var x = document.getElementById("brd").value;
    document.getElementById("val-brd").innerHTML = x + "px";
    document.getElementById("the-box").style.borderWidth = x + "px";
}

function changePadding() {
    var p = document.getElementById("pad").value;
    document.getElementById("val-pad").innerHTML = p + "px";
    document.getElementById("the-box").style.padding = p + "px";
}