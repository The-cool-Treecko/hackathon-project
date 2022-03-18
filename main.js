var score = 0;
var done = [0];
var attempted = 0;
var notattempted = 10;

function correct(Q, A) {
    if (done.includes(Q) == false) {
        document.getElementById("correct").play()
        document.getElementById("Q" + Q + "A" + A).style.backgroundColor = "lightgreen";
        document.getElementById("Q" + Q + "A" + A).style.borderColor = "limegreen";
        score = score + 10;
        done.push(Q);
        console.log(done);
        console.log(score);
        document.getElementById("score").innerHTML = "Score: " + score;
        attempted = attempted + 1;
        notattempted = notattempted - 1;
    }
}

function wrong(Q, A) {
    if (done.includes(Q) == false) {
        document.getElementById("wrong").play()
        document.getElementById("Q" + Q + "A" + A).style.backgroundColor = "lightsalmon";
        document.getElementById("Q" + Q + "A" + A).style.borderColor = "tomato";
        done.push(Q)
        console.log(done)
        attempted = attempted + 1;
        notattempted = notattempted - 1;
    }
}