var randomY, randomX, boat, tries; 
var numberOfClicks = 0;

$(document).ready(function ()
{
    $("#laddaKnappen").click(DrawGameBoard);



}
);

function DrawGameBoard() {

    $("#difficultySelector").fadeOut(); 

    var form = document.getElementById("difficultySelector");

    var difficultyLevel = form.elements["difficulty"].value;


    var size;

    switch (difficultyLevel) {
        case 'easy': size = 5; boat = new Array(1); break;
        case 'medium': size = 10; boat = new Array(2); break;
        case 'hard': size = 15; boat = new Array(3); break;
        default: break;
    }
    tries = boat.length;
    document.getElementById("wrapper").style.height = (size * 110) + "px";
    document.getElementById("wrapper").style.width = (size * 110) + "px";
    

    for (var i = 0; i < size; i++) {

        for (var j = 0; j < size; j++) {
            $("#gameBoard").append('<div class="gameButton" id="' + i + j + '"></div>');
            

        }
    }
    
    for (var i = 0; i < boat.length; i++) {
        randomY = Math.floor((Math.random() * size));
        randomX = Math.floor((Math.random() * size));
        boat[i] = (randomY.toString() + randomX.toString());
        alert(boat[i]);
    }
    SetInfoText();

    $(".gameButton").click(CheckIfRight);
   

    //$("#" + boat[0]).click(function () {

    //    $(this).css("background-image", "url(/IMG/titanic.png)");
    //    $(this).css("background-size", "100px 100px");
    //    tries--
        
    //    if (tries == 0) {
    //        alert("GRATTIS!");
    //    }

    //});
    //$("#" + boat[1]).click(function () {

    //    $(this).css("background-image", "url(/IMG/titanic.png)");
    //    $(this).css("background-size", "100px 100px");
    //    tries--

        
    //    if (tries == 0) {
    //        alert("GRATTIS!");
    //    }

    //});
    //$("#" + boat[2]).click(function () {
    //    tries--
    //    $(this).css("background-image", "url(/IMG/titanic.png)");
    //    $(this).css("background-size", "100px 100px");


       
    //    if (tries == 0) {
    //        alert("GRATTIS!");
    //    }
    //});
    //$("#" + boat[3]).click(function () {
    //    tries--
    //    $(this).css("background-image", "url(/IMG/titanic.png)");
    //    $(this).css("background-size", "100px 100px");


       
    //    if (tries == 0) {
    //        alert("GRATTIS!");
    //    }
    //});
    
    
}

function CheckIfRight() {

    
    for (var i = 0; i < boat.length; i++) {
        if ($(this).attr("id") == boat[i] && $(this).attr("class") == "gameButton") {
            alert($(this).attr("id"));
            $(this).removeClass("gameButton");
            $(this).addClass("placedBoat");
            tries--;
            numberOfClicks++;
        }
        else if ($(this).attr("class") == "gameButton") {
            $(this).removeClass("gameButton");
            $(this).addClass("missedBoat");
            numberOfClicks++;
        }

    }
    SetInfoText();
   
    

  
}
function SetInfoText() {
    document.getElementById("clicks").innerHTML = numberOfClicks.toString();
    

}



