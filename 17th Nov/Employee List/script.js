function addEmp() {
    var n = document.getElementById("empName").value;
    var a = document.getElementById("empAge").value;
    var p = document.getElementById("empPos").value;

    if (n == "") {
        alert("Please fill out this field.");
    } else if (a == "") {
        alert("Please fill out this field.");
    } else if (p == "") {
        alert("Please fill out this field.");
    } else {
        var tbody = document.getElementById("tableBody");

        var rowHTML = "<tr><td>" + n + "</td><td>" + a + "</td><td>" + p + "</td></tr>";

        tbody.innerHTML = tbody.innerHTML + rowHTML;

        document.getElementById("empName").value = "";
        document.getElementById("empAge").value = "";
        document.getElementById("empPos").value = "";
    }
}