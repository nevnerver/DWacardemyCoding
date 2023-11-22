// 과제!!!
// 한화이글스 투수들의 평균 자책점

const name = ["주현상", "윤대경", "이민우", "이태양", "페냐", "박상원", "장시환"];
const era = [1.96, 2.45, 2.63, 3.23, 3.6, 3.65, 3.38];

// era -> 평균자책점
// 7명 선수들의 평균자책점의 평균치를 구하시오
// 평균치 이상인 선수들이 누구인지 출력하세요.
let total = 0;
let avg_above = new Array();

for (var i = 0; i < era.length; i++) {
    total += era[i];
    var avg = total / era.length;
}
document.write("평균치 : " + avg + "점 <br>");

for (var i = 0; i < era.length; i++) {
    if (era[i] > avg) {
        avg_above.push(name[i]);
    }
}
document.write("평균치 이상인 선수 : " + avg_above);
