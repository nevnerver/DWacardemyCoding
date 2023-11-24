let board = new Array();

//중복없이 25개 숫자 저장하기
for (var i = 1; i <= 25; i++) {
    var tmp = Math.floor(Math.random() * 100) + 1;
    if (board.indexOf(tmp) == -1)
        board.push(tmp);
    else
        i--;
}

$(function () {

    $.each(board, function (i, v) { //i-인덱스, v-배열값
        $(".numBox").eq(i).text(v);
    });

    $(".numBox").on("click", function () {
        $(this).css("background", "black");
        $(this).css("color", "white");
        var idx = $(".numBox").index(this);
        board[idx] = 0;
        alert(board);
        endgame();
    });

});

var row = 0; // 가로 빙고 
var col = 0; // 세로 빙고
var cross = 0; // 대각선 빙고

function endgame() {
    for (var k = 0; k < board.length; k++) {

    }
}

$(".result").text("5줄 빙고로 게임이 끝났습니다");
$(".result").text("6줄 이상 빙고로 게임 실패");
