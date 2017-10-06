$(document).ready(function()
{
    $("#laddaKnappen").click(DrawGameBoard);



}
);

function DrawGameBoard(){
    var form = document.getElementById("difficultySelector");

    var difficultyLevel = form.elements["difficulty"].value;


    var size;

    switch (difficultyLevel) {

        case 'easy':
            size = 5;
            break; 

        case 'medium':
            size = 10; 
            break; 

        case 'hard':
            size = 15; 
            break; 

        default:
    }

    var gameBoardArray = new Array(size);

    for (var i = 0; i < gameBoardArray.length; i++) {
        gameBoardArray[i] = new Array(size); 
    }

    for (var i = 0; i < size .lengh; i++) {
        $("#gameBoard").append('<br>');
        for (var j = 0; j < gameBoardArray.length; j++) {
            $("#gameBoard").append(i, j, '  '); 

        }
    }

    


    alert(difficultyLevel);

}