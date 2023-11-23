const movie_name = ["서울의봄", "프레디의피자가게", "사채소년", "헝거게임", "더와일드", "더마블스", "30일", "나폴레옹", "빅슬립"];
const grade = [8.7, 7.3, 7.3, 6.7, 8.2, 3.9, 6.9, 9.6, 9.0];
const nation = ["한국", "미국", "한국", "미국", "미국", "미국", "한국", "영국", "한국"];
// 일차원 배열
let mov = [movie_name, grade, nation];
// mov[0][0] -> 서울의봄
// mov[2][4] -> 미국
// 이차원 배열과 이차원 배열일때 데이터 뽑아내는 법

// 영화 제목을 검색하여 평점(grade)과 국가(nation)를 출력하세요.

function movie_search() {
    var movie = $("#movie").val().replace(/\s/g, "");
    var idx = movie_name.indexOf(movie);
    if (idx == -1) var res = `영화를 찾을 수 없습니다.`;
    else {
        for (i = 0; i < movie_name.length; i++) {
            if (i == idx) {
                var res = `영화제목 : ${movie_name[i]}, 평점 : ${grade[i]}점, 국가 : ${nation[i]}`;
                res += `<br><br><b>같은국가에서 만든 다른영화</b><br>`;

                var con = new Array();
                for (i = 0; i < movie_name.length; i++) {
                    if (nation[i] == nation[idx] && i != idx) {
                        con.push(movie_name[i]);
                    }
                }
                res += con;
            }
        }
    }
    $("#result").html(res);
}

let num = [
    [1, 2, 3],
    [4, 5, 6],
    [11, 22, 33, 44],
];

// alert(num[2][2]);
// 2차원 배열은 인덱스가 2개 이기 때문에 반복문도 2번 사용된다.

for (var i = 0; i < num.length; i++) {
    for (var k = 0; k < num[i].length; k++) {
        document.write(num[i][k] + " ");
    }
}
