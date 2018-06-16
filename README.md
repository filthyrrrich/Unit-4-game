# Unit-4-game

Conclusion:



Psuedo-Code:

Basic html/css with correct divs.
Create variables.
Get images for my 4 crystals.
Scoreboard to keep track of wins/losses.
Functiom to start game.
    Generate a random number. This is win condition.

Function to add onclick to images.
    Generate random number for each image.
    Each Onclick random image number is added to total number variable.
        if total number === random start game number, results in win.
        if total number > random start game number, results in loss.
    Restart game



    var wins = 0;
var losses = 0;
var counter = 0;
function randomChipValue() {
    return Math.floor((Math.random() * 12) + 1);

}

var goal = Math.floor((Math.random() * 102) + 19);
// var imgChip = $("<img>");
// var chips = ["assets/images/green-chip.jpg", "assets/images/blue-chip.jpg", "assets/images/red-chip.jpg", "assets/images/black-chip.jpg"];
function startGame(){
    
    // for (var i = 0; i < chips.length; i++) {
    //     randomChipValue = Math.floor((Math.random() * 12) + 1);
    //     // imgChip = $("<img>");
    //     // imgChip.addClass("chip-img col-sm-3");
    //     // imgChip.attr("src", chips[i]);
    //     imgChip.attr("data-chip-value", randomChipValue);
    //     // $(".chips").append(imgChip);
        $("#chip-img1").attr("data-chip-value", randomChipValue());
        $("#chip-img2").attr("data-chip-value", randomChipValue());
        $("#chip-img3").attr("data-chip-value", randomChipValue());
        $("#chip-img4").attr("data-chip-value", randomChipValue());
    // }
}
// for (var i = 0; i < chips.length; i++) {
//     randomChipValue = Math.floor((Math.random() * 12) + 1);
//     imgChip = $("<img>");
//     imgChip.addClass("chip-img col-sm-3");
//     imgChip.attr("src", chips[i]);
//     imgChip.attr("data-chip-value", randomChipValue);
//     $(".chips").append(imgChip);
// }
// for (var i = 0; i < chips.length; i++) {
//     // randomChipValue = Math.floor((Math.random() * 12) + 1);
//     imgChip = $("<img>");
//     imgChip.addClass("chip-img col-sm-3");
//     imgChip.attr("src", chips[i]);
//     // imgChip.attr("data-chip-value", randomChipValue);
//     $(".chips").append(imgChip);
// }

// function startGame() {
//     for (var i = 0; i < chips.length; i++) {
//         randomChipValue = Math.floor((Math.random() * 12) + 1);
//         imgChip.attr("data-chip-value", randomChipValue);
// }
// }
function nextGame() {
    // for (var i = 0; i < chips.length; i++) {
    //     imgChip.attr("data-chip-value", randomChipValue);
    // }
    counter = 0;
    goal = Math.floor((Math.random() * 102) + 19);
    $("#total-score").text("Total Score: " + counter);
    $("#goal-score").text("Target Score: " + goal);
    startGame();
}
startGame();

$(document).ready(function (){
    

$(".chip-img").on("click", function(){
    var chipValue =($(this).attr("data-chip-value"));
    chipValue = parseInt(chipValue);
    counter += chipValue;
    $("#total-score").text("Total Score: " + counter);
    console.log(chipValue);

    if (counter === goal) {
        wins++;
        $("#total-wins").text("Wins: " + wins);
        // alert("You win!");
        nextGame();
        
        

      }
  
      else if (counter >= goal) {
        losses++;
        $("#total-losses").text("Losses: " + losses);
        // alert("You lose!!");
        nextGame();
        

      }
});

$("#goal-score").text("Target Score: " + goal);
});
console.log(randomChipValue);
