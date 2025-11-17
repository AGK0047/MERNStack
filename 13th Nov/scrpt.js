function checkTheSign() {
  var input = document.getElementById("myNumber").value;
  
  
  if (input > 0) {
      document.getElementById("result").innerHTML = input + " is Positive";
      document.getElementById("result").style.color = "green";
  }
  
  if (input < 0) {
      document.getElementById("result").innerHTML = input + " is Negative";
      document.getElementById("result").style.color = "red";
  }
  
 
  if (input == 0) {
      if (input !== "") {
          document.getElementById("result").innerHTML = input + " is Zero";
          document.getElementById("result").style.color = "blue";
      } else {
          document.getElementById("result").innerHTML = "⚠️ Please enter a valid number.";
          document.getElementById("result").style.color = "black";
      }
  }
}
