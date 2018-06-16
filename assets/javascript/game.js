$(document).ready(function (){

var wins = 0;
var losses = 0;
var counter = 0;

var randomChipValue = Math.floor((Math.random() * 12) + 1);
var goal = Math.floor((Math.random() * 102) + 19);

//dynamic chip image
var imgChip = $("<img>");
var chips = ["assets/images/green-chip.jpg", "assets/images/blue-chip.jpg", "assets/images/red-chip.jpg", "assets/images/black-chip.jpg"];

//allows chips to be clicked
function clickEvent() {
   
    var chipValue =($(this).attr("data-chip-value"));
    chipValue = parseInt(chipValue);
    counter += chipValue;
    $("#total-score").html("Total Score: <br>" + counter);

    //win condition
    if (counter === goal) {
        wins++;
        $("#total-wins").html("Wins: <br>" + wins);
        startGame();
      }
    //lose condition
      else if (counter >= goal) {
        losses++;
        $("#total-losses").html("Losses: <br>" + losses);
        startGame();
      }
}
//main game function
function startGame(){
    $(".chips").empty();
    counter = 0;
    goal = Math.floor((Math.random() * 102) + 19);
    $("#total-score").html("Total Score: <br>" + counter);
    $("#goal-score").html("Target Score: <br>" + goal);
    
    //loop through array and assign values/create images in html
    for (var i = 0; i < chips.length; i++) {
        randomChipValue = Math.floor((Math.random() * 12) + 1);
        imgChip = $("<img>");
        imgChip.addClass("chip-img col-sm-3");
        imgChip.attr("src", chips[i]);
        imgChip.attr("data-chip-value", randomChipValue);
        imgChip.on("click", clickEvent)
        $(".chips").append(imgChip);
    }
}
startGame();
});

