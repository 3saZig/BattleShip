$(document).ready(function()
{
    $("#laddaKnappen").click(DrawGameBoard);



}
);

function DrawGameBoard(){
    var form = document.getElementById("difficultySelector");

    var difficultyLevel = form.elements["difficulty"].value;


    var size;

    //switch (difficultyLevel) {
    //    case:
    //    default:
    //}
    alert(difficultyLevel);

}