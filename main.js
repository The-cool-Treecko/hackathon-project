var score = 0;
var done = [0];

function correct(Q, A) {
    if (done.includes(Q) == false) {
        document.getElementById("correct").play()
        document.getElementById("Q" + Q + "A" + A).style.backgroundColor = "lightgreen";
        document.getElementById("Q" + Q + "A" + A).style.borderColor = "limegreen";
        currenttext = document.getElementById("Q" + Q).innerHTML
        document.getElementById("Q" + Q).innerHTML = currenttext + "<span style='float:right;'>✔️</span>";
        score = score + 10;
        done.push(Q);
        console.log(done);
        console.log(score);
        document.getElementById("score").innerHTML = "Score: " + score;
    }
}

function wrong(Q, A) {
    if (done.includes(Q) == false) {
        document.getElementById("wrong").play()
        document.getElementById("Q" + Q + "A" + A).style.backgroundColor = "lightsalmon";
        document.getElementById("Q" + Q + "A" + A).style.borderColor = "tomato";
        currenttext = document.getElementById("Q" + Q).innerHTML
        document.getElementById("Q" + Q).innerHTML = currenttext + "<span style='float:right;'>❌</span>";
        done.push(Q)
        console.log(done)
    }
}
