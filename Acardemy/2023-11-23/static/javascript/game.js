let board = new Array();

//중복없이 25개 숫자 저장하기
for (var i = 1; i <= 25; i++) {
    var tmp = Math.floor(Math.random() * 100) + 1;
    if (board.indexOf(tmp) == -1) board.push(tmp);
    else i--;
}

$(function () {
    $.each(board, function (i, v) {
        //i-인덱스, v-배열값
        $(".numBox").eq(i).text(v);
    });

    $(".numBox").on("click", function () {
        $(this).css("background", "#CFA4F7");
        $(this).css("color", "#2A0066");
        var idx = $(".numBox").index(this);
        board[idx] = 0;
        endgame();
    });
});

var count = 0;

let bingo = new Array();
let row_bingo1 = new Array();
let row_bingo2 = new Array();
let row_bingo3 = new Array();
let row_bingo4 = new Array();
let row_bingo5 = new Array();
let col_bingo1 = new Array();
let col_bingo2 = new Array();
let col_bingo3 = new Array();
let col_bingo4 = new Array();
let col_bingo5 = new Array();
let left_cross_bingo = new Array();
let right_cross_bingo = new Array();

function endgame() {
    for (var i = 0; i < board.length; i++) {
        if (board[i] == 0 && bingo.indexOf(i) == -1) bingo.push(i);
    }
    for (var k = 0; k < bingo.length; k++) {
        if (bingo[k] % 6 == 0 && left_cross_bingo.indexOf(bingo[k]) == -1) {
            left_cross_bingo.push(bingo[k]);
            if (left_cross_bingo.length == 5) count++;
        }
        if (bingo[k] % 4 == 0 && right_cross_bingo.indexOf(bingo[k]) == -1 && bingo[k] != 0 && bingo[k] != 24) {
            right_cross_bingo.push(bingo[k]);
            alert(right_cross_bingo);
            if (right_cross_bingo.length == 5) count++;
        }
        if (bingo[k] % 5 == 0 && col_bingo1.indexOf(bingo[k]) == -1) {
            col_bingo1.push(bingo[k]);
            if (col_bingo1.length == 5) count++;
        }
        if (bingo[k] % 5 == 1 && col_bingo2.indexOf(bingo[k]) == -1 && bingo[k] != 0) {
            col_bingo2.push(bingo[k]);
            if (col_bingo2.length == 5) count++;
        }
        if (bingo[k] % 5 == 2 && col_bingo3.indexOf(bingo[k]) == -1 && bingo[k] != 0) {
            col_bingo3.push(bingo[k]);
            if (col_bingo3.length == 5) count++;
        }
        if (bingo[k] % 5 == 3 && col_bingo4.indexOf(bingo[k]) == -1 && bingo[k] != 0) {
            col_bingo4.push(bingo[k]);
            if (col_bingo4.length == 5) count++;
        }
        if (bingo[k] % 5 == 4 && col_bingo5.indexOf(bingo[k]) == -1 && bingo[k] != 0) {
            col_bingo5.push(bingo[k]);
            if (col_bingo5.length == 5) count++;
        }
        if (bingo[k] / 5 < 1 && row_bingo1.indexOf(bingo[k]) == -1) {
            row_bingo1.push(bingo[k]);
            if (row_bingo1.length == 5) count++;
        }
        if (bingo[k] / 5 >= 1 && bingo[k] / 5 < 2 && row_bingo2.indexOf(bingo[k]) == -1) {
            row_bingo2.push(bingo[k]);
            if (row_bingo2.length == 5) count++;
        }
        if (bingo[k] / 5 >= 2 && bingo[k] / 5 < 3 && row_bingo3.indexOf(bingo[k]) == -1) {
            row_bingo3.push(bingo[k]);
            if (row_bingo3.length == 5) count++;
        }
        if (bingo[k] / 5 >= 3 && bingo[k] / 5 < 4 && row_bingo4.indexOf(bingo[k]) == -1) {
            row_bingo4.push(bingo[k]);
            if (row_bingo4.length == 5) count++;
        }
        if (bingo[k] / 5 >= 4 && row_bingo5.indexOf(bingo[k]) == -1) {
            row_bingo5.push(bingo[k]);
            if (row_bingo5.length == 5) count++;
        }
    }
    if (count == 5) {
        $(".result").text("5줄 빙고로 게임이 끝났습니다");
        $("#result_modal").css("display", "block");
    }
    if (count >= 6) {
        $(".result").text("6줄 이상 빙고로 게임 실패");
        $("#result_modal").css("display", "block");
    }
}
