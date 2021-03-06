var targetNumber;
var totalScore = 0;
var winCount = 0;
var lossCount = 0;
// random crystal value
var blueCrystalValue;
var redCrystalValue;
var yellowCrystalValue;
var purpleCrystalValue;

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

function setScore(crystalValue) {
    totalScore += crystalValue
    $("#total-score").text(totalScore)
    if (totalScore === targetNumber) {
        winCount++;
        resetGame();
        }
    else if (totalScore >= targetNumber) {
        lossCount++;
        resetGame();
    };
}
resetGame();

$(document).ready(function () {

    $(".pikachu").on("click", function() {
        setScore(blueCrystalValue);
    });

    $(".snorlax").on("click", function() {
        setScore(redCrystalValue);
    });

    $(".jigglypuff").on("click", function() {
        setScore(yellowCrystalValue);
    });

    $(".bulbasaur").on("click", function() {
        setScore(purpleCrystalValue);
    });
});