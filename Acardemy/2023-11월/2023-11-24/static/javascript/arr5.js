// 2차원배열

// let arr = [
//     [1, 2, 3, 4, 5, 6, 7, 8],
//     [10, 20, 30, 44, 55, 66, 77]
// ];

// for (var i = 0; i < arr.length; i++) { //2번 반복 - arr에는 저장공간이 2개
//     for (var k = 0; k < arr[i].length; k++) { //arr[0]인덱스 length, arr[1]인덱스 length
//         document.write(arr[i][k] + " ");
//     }
//     document.write("<br>");
// }


// let people = [
//     ["김유신", "45", "군인"],
//     ["이순신", "38", "군인"],
//     ["서종우", "51", "변호사"],
//     ["김민수", "32", "편의점알바"],
//     ["송재영", "25", "농심연구원"],
//     ["이민재", "29", "한화이글스관람객"]
// ];

// for (var i = 0; i < people.length; i++) {
//     // for (var k = 0; k < people[i].length; k++) {
//     // document.write(people[i][0] + " ");
//     // }
//     // if (people[i][1] > 30) {
//     // document.write(people[i][0] + ", " + people[i][2] + "<br>")
//     // }

//     if (people[i][0].indexOf("김") != -1)
//         document.write(people[i][1] + " , " + people[i][2] + "<br");
// }

// let board = [
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//     [1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// ];

//미로
let board = [
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1],
    [1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 2],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

let x = 0, y = 0;

function draw() {
    for (var i = 0; i < board.length; i++) {
        for (var k = 0; k < board[i].length; k++) {
            if (board[i][k] == 0)
                $("#box").append("&ensp;&ensp;");
            // &nbsp = 1칸 공백 , &ensp = 2칸공백 , &emsp = 3칸공백
            if (board[i][k] == 1)
                $("#box").append("■");
            if (board[i][k] == 2) {
                $("#box").append("♥")
                x = k; y = i;
            }
        }
        $("#box").append("<br>")
    }

}
// html 은 기존에 있던걸 지우고 넣는다.
// append는 기존에 있던거에 추가로 넣는다.

$(function () {
    draw(); //function draw 실행 - draw 함수 실행
});

$(document).on("keyup", function (key) {
    // w-87 , a-65 , s-83 , d-68

    // if (key.keyCode == 87) {
    //     board[y][x] = 0;
    //     board[--y][x] = 2;
    //     $("#box").html("");
    //     draw();
    // }
    // 직접 만드세요.
    //
    //     switch (key.keyCode) { // 키보드에서 누른 키 w,a,s,d중 선택하기
    //         case 87: // w키 누른 경우, 위
    //             board[y][x] = 0;
    //             board[--y][x] = 2;
    //             if (board[y][x] == board[0][x]) {
    //                 board[y][x] = 1;
    //                 board[++y][x] = 2;
    //             }
    //             break;
    //         case 83: // s키 누른 경우, 아래
    //             board[y][x] = 0;
    //             board[++y][x] = 2;
    //             if (board[y][x] == board[9][x]) {
    //                 board[y][x] = 1;
    //                 board[--y][x] = 2;
    //             }
    //             break;
    //         case 65: // a키 누른 경우, 왼쪽
    //             board[y][x] = 0;
    //             board[y][--x] = 2;
    //             if (board[y][x] == board[y][0]) {
    //                 board[y][x] = 1;
    //                 board[y][++x] = 2;
    //             }
    //             break;
    //         case 68: // d키 누른 경우, 오른쪽
    //             board[y][x] = 0;
    //             board[y][++x] = 2;
    //             if (board[y][x] == board[y][16]) {
    //                 board[y][x] = 1;
    //                 board[y][--x] = 2;
    //             }
    //             break;
    //         default:
    //             alert("w,a,s,d 를 방향키로 사용합니다.");
    //     }
    //     $("#box").html("");
    //     draw();
    // });


    board[y][x] = 0;
    switch (key.keyCode) { // 키보드에서 누른 키 w,a,s,d중 선택하기
        case 87: // w키 누른 경우, 위
            y = board[y - 1][x] == 1 ? y : --y;
            break;
        case 83: // s키 누른 경우, 아래
            y = board[y + 1][x] == 1 ? y : ++y;
            break;
        case 65: // a키 누른 경우, 왼쪽
            x = board[y][x - 1] == 1 ? x : --x;
            break;
        case 68: // d키 누른 경우, 오른쪽
            x = board[y][x + 1] == 1 ? x : ++x;
            break;
        default:
            alert("w,a,s,d 를 방향키로 사용합니다.");
    }
    board[y][x] = 2;
    $("#box").html("");
    draw();
});