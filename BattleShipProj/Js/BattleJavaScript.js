var randomY, randomX, boat; 

$(document).ready(function ()
{
    $("#laddaKnappen").click(DrawGameBoard);



}
);

function DrawGameBoard() {

    $("#difficultySelector").toggle(); 

    var form = document.getElementById("difficultySelector");

    var difficultyLevel = form.elements["difficulty"].value;


    var size;

    switch (difficultyLevel) {
        case 'easy': size = 5; boat = new Array(1); break;
        case 'medium': size = 10; boat = new Array(2); break;
        case 'hard': size = 15; boat = new Array(3); break;
        default: break;
    }

    document.getElementById("wrapper").style.height = (size * 100) + "px";
    document.getElementById("wrapper").style.width = (size * 100) + "px";
    

    for (var i = 0; i < size; i++) {
        //$("#gameBoard").append('<br>');

        for (var j = 0; j < size; j++) {
            $("#gameBoard").append('<div class="gameButton" id="' + i + j + '"></div>');
            $("#" + i + j ).css("background-image", "url(/IMG/stormySea.jpg)");

        }
    }
    
    for (var i = 0; i < boat.length; i++) {
        randomY = Math.floor((Math.random() * size));
        randomX = Math.floor((Math.random() * size));
        boat[i] = (randomY.toString() + randomX.toString());
        alert(boat[i]);
    }
    

    $("#" + boat[0]).click(function () {

        $(this).css("background-image", "url(/IMG/titanic.png)");
        $(this).css("background-size", "100px 100px");


            //css("background-color", "pink");

        //$("#" + randomY + randomX).style.backgroundColor = "pink";

    });
    $("#" + boat[1]).click(function () {

        $(this).css("background-image", "url(/IMG/titanic.png)");
        $(this).css("background-size", "100px 100px");


        //css("background-color", "pink");

        //$("#" + randomY + randomX).style.backgroundColor = "pink";

    });
    $("#" + boat[2]).click(function () {

        $(this).css("background-image", "url(/IMG/titanic.png)");
        $(this).css("background-size", "100px 100px");


        //css("background-color", "pink");

        //$("#" + randomY + randomX).style.backgroundColor = "pink";

    });
    $("#" + boat[3]).click(function () {

        $(this).css("background-image", "url(/IMG/titanic.png)");
        $(this).css("background-size", "100px 100px");


        //css("background-color", "pink");

        //$("#" + randomY + randomX).style.backgroundColor = "pink";

    });
    

}




