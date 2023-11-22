// 배열
// 배열 - 변수의공간을 연속적으로 나열되어 있는 공간
// 변수는 단 하나의 값만 저장 할수 있지만
// 배열은 다수의 값을 저장할 수 있다.
// 많은 데이터를 저장하고 관리하기에 가장 쉬운 방법이다.

// var arr1 = [];
// var arr2 = [12, 23, 34, 45];
// var arr3 = new Array();

// // 메모리주소를 가지고 있는 변수 = 참조변수

// arr3.push(45);
// arr3.push(23);
// arr3.push("이민재");
// arr3.push("노재홍");
// arr3.push(3.14);

// // alert(arr3);
// document.write(arr3[4]);

// for (var i = 0; i < arr3.length; i++) {
//     document.write(arr3[i] + " ");
// }

// let name = ["이순신", "강감찬", "장보고", "장영실", "이성계"];

// document.write("<br>" + name);
// name[2] = "김춘추";
// document.write("<br>" + name);
// //배열에 새로운 데이터 저장 - push
// // push는 배열의 마지막에 데이터를 저장한다.

// // 배열에 저장된 데이터 삭제 - pop (마지막 데이터 삭제)
// document.write("삭제데이터" + name.pop());
// document.write("<br>" + name);

// //배열의 맨 앞쪽에 저장 - unshift()
// name.unshift("정도전");
// document.write("<br>" + name);
// // 배열의 맨 앞쪽 삭제 - shift()
// name.shift();
// document.write("<br>" + name);

// // 배열의 특정위치에 추가하거나 삭제 - splice
// name.splice(2, 0, "정약용", "김유신", "문익점");
// // 2번째 인덱스에서 0개 삭제하고 3개 데이터 추가
// document.write("<br>" + name);
// name.splice(2, 2);
// //2번재 인덱스부터 2개 삭제
// document.write("<br>" + name);

// // 배열에서 특정위치의 데이터를 가져오기 - slice

// let name2 = name.slice(1, 3);
// document.write("<br>" + name2);
// document.write("<br>" + name);

// // 다수의 배열을 하나로 합치기 - concat
// let name3 = name.concat(name2);
// document.write("<br>concat - " + name3);

// // 배열에 저장된 데이터들을 사전적순으로 정령 - sort
// name3.sort();
// document.write("<br>sort - " + name3);

// // 배열을 역순으로 정렬 - reverse
// name3.reverse();
// document.write("<br>reverse - " + name3);

// //배열의 모든 데이터를 지정된 문자로 연결하여
// //하나의 문자열로 변환 - join

// var str = name3.join("-");
// document.write("<br>join - " + str);

// document.write("<br>" + str.split("-"));

// let num = new Array();

// for (var i = 1; i <= 10; i++) {
//     num.push(Math.floor(Math.random() * 50) + 1);
// }
// document.write(num + "<br>");

// for (var i = 0; i < num.length; i++) {
//     if (num[i] % 2 == 1) {
//         num[i] = num[i] + 1;
//     }
// }
// document.write(num + "<br>");

// 배열에 저장된 숫자 중에서 5의 배수만 출력하시오
// for (var i = 0; i < num.length; i++) {
//     if (num[i] % 5 == 0) {
//         document.write(num[i] + " ");
//     }
// }

// let temp = new Array();
// for (var i = 0; i < num.length; i++) {
//     if (num[i] % 5 == 0) temp.push(num[i]);
// }
// document.write("5의 배수 : " + temp + "<br>");

// const subject = ["국어", "수학", "영어", "과학"];

// for (var i = 0; i < subject.length; i++) {
//     var score = prompt(subject[i] + "점수 입력");
// }

const subject = ["국어", "수학", "영어", "과학"];
let idx = 0; //subject 배열의 인덱스 표현 변수

let score = new Array(); // 점수저장 배열

//window.onload=function(){}

$(function () {
    //document.getElementById("subject")
    $("#subject").text(subject[idx]);
});

function save() {
    score.push(Number($("#score").val()));
    $("#subject").text(subject[++idx]);
    $("#score").val(""); //input 태그의 value 비우기
    $("#score").focus(); //input 태그에 커서표시
}
