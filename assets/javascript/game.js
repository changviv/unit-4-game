//  The player will be shown a random number at the start of the game.
var targetNumber = Math.floor(Math.random() * 101) + 19;
// counter variable
var totalScore = 0;
var winCount = 0;
var lossCount = 0;
// random crystal value
var blueCrystalValue = Math.floor(Math.random() * 12) + 1;
var redCrystalValue = Math.floor(Math.random() * 12) + 1;
var yellowCrystalValue = Math.floor(Math.random() * 12) + 1;
var purpleCrystalValue = Math.floor(Math.random() * 12) + 1;

// reset doesn't work when you win
function resetGame() {
    targetNumber = Math.floor(Math.random() * 101) + 19;
    blueCrystalValue = Math.floor(Math.random() * 12) + 1;
    redCrystalValue = Math.floor(Math.random() * 12) + 1;
    yellowCrystalValue = Math.floor(Math.random() * 12) + 1;
    purpleCrystalValue = Math.floor(Math.random() * 12) + 1;
    totalScore = 0
    $("#wins").text(winCount)
    $("#loss").text(lossCount)
    $("#total-score").text(totalScore)
    $("#random-number").text(targetNumber);
}


// fix setScore does not work
function setScore(crystalValue) {
    totalScore += crystalValue
    $("#total-score").text(totalScore)
    if (totalScore === targetNumber) {
        winCount++;
        alert("YOU WIN")
        resetGame();
        }
    else if (totalScore >= targetNumber) {
        lossCount++;
        resetGame();
    };
}
resetGame();

$(document).ready(function () {

    $(".blue").on("click", function() {
        setScore(blueCrystalValue);
        console.log(blueCrystalValue)
    });

    $(".red").on("click", function() {
        setScore(redCrystalValue);
        console.log(redCrystalValue)
    });

    $(".yellow").on("click", function() {
        setScore(yellowCrystalValue);
        console.log(yellowCrystalValue)
    });

    $(".purple").on("click", function() {
        setScore(purpleCrystalValue);
        console.log(purpleCrystalValue)
    });

});