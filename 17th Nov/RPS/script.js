var myScore = 0;
var cpuScore = 0;
var isPlaying = 1;

function runGame(myPick) {
    if (isPlaying == 1) {
        var randomNum = Math.random();
        var cpuPick = "";

        if (randomNum < 0.33) {
            cpuPick = "R";
        } else if (randomNum < 0.66) {
            cpuPick = "P";
        } else {
            cpuPick = "S";
        }

        if (myPick == cpuPick) {
            document.getElementById("status-text").innerHTML = "Tie! Both chose " + myPick + ".";
        } else {
            if (myPick == "R") {
                if (cpuPick == "S") {
                    myScore = myScore + 1;
                    document.getElementById("status-text").innerHTML = "You win! R beats S.";
                } else {
                    cpuScore = cpuScore + 1;
                    document.getElementById("status-text").innerHTML = "Computer wins! P beats R.";
                }
            }
            
            if (myPick == "P") {
                if (cpuPick == "R") {
                    myScore = myScore + 1;
                    document.getElementById("status-text").innerHTML = "You win! P beats R.";
                } else {
                    cpuScore = cpuScore + 1;
                    document.getElementById("status-text").innerHTML = "Computer wins! S beats P.";
                }
            }

            if (myPick == "S") {
                if (cpuPick == "P") {
                    myScore = myScore + 1;
                    document.getElementById("status-text").innerHTML = "You win! S beats P.";
                } else {
                    cpuScore = cpuScore + 1;
                    document.getElementById("status-text").innerHTML = "Computer wins! R beats S.";
                }
            }
        }

        document.getElementById("score1").innerHTML = "Score: " + myScore;
        document.getElementById("score2").innerHTML = "Score: " + cpuScore;
    }
}

function stopGame() {
    isPlaying = 0;
    var msg = "";
    
    if (myScore > cpuScore) {
        msg = "Final Result: YOU WIN!";
    }
    if (cpuScore > myScore) {
        msg = "Final Result: COMPUTER WINS!";
    }
    if (myScore == cpuScore) {
        msg = "Final Result: IT'S A TIE!";
    }

    document.getElementById("status-text").innerHTML = "Game Quit by User. " + msg;
}