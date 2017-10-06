

$(document).ready(function ()
{
    $("#laddaKnappen").click(DrawGameBoard);



}
);

function DrawGameBoard(){
    var form = document.getElementById("difficultySelector");

    var difficultyLevel = form.elements["difficulty"].value;


    var size;

    switch (difficultyLevel) {
        case 'easy': size = 5; break;
        case 'medium': size = 10; break;
        case 'hard': size = 15; break;
        default: break;
    }

    document.getElementById("wrapper").style.height = (size * 100) + "px";
    document.getElementById("wrapper").style.width = (size * 100) + "px";
    

    for (var i = 0; i < size; i++) {
        //$("#gameBoard").append('<br>');

        for (var j = 0; j < size; j++) {
            $("#gameBoard").append('<div class="gameButton" id="' + i + j + '">hej</div>');
        }
    }
    

    


}

