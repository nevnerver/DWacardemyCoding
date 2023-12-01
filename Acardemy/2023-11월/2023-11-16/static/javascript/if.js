//if문 - 조건식의 참, 거짓에 의해 내용을 실행시킨다.
/*
if(조건식){ 
    참일 경우 실행 될 내용
}
if뒤에 작은 괄호열어서 안에 조건식을 작성한다.
조건식 뒤에는 중괄호를 열어서 안에 참일 경우 실행할 내용 작성

if(조건식){
    참일 경우 실행할 내용
}
else{
    거짓일 경우 실행할 내용
}
조건식이 거짓이라면 첫번째 중괄호는 건너뛰고(jmp) else 뒤의 중괄호를 실행시킨다
if문에서 조건식 작성할 수 있는곳은 오직 if 뒤만 가능하다.
else 뒤에는 조건식 넣을 수 없다.

조건에 따라 실행될 내용이 여러개 라면 (3개 이상)
if (조건식){
    내용
}
else {
    내용
    내용
}

if(조건식){
    내용
}else if(조건식){
    내용
}else{
    내용
}

*/

// var num = 20 ;

// // (num>0) ? console.log("양수다") : console.log("음수다") ;

// if ( num > 0 ) {
//     console.log("양수다");
// }else{
//     console.log("음수다");
// }

// var birth = parseInt(prompt("생년월일(8자리) 입력"));
// // birth = 19991102
// if ( birth <= 20041231 ){
//     console.log("성인입니다");
// }
// else{
//     console.log("미성년자입니다");
// }

//국어 , 영어 , 수학 3 과목 점수 입력 받기
// 3 과목의 평균 점수가 65점 이상이면 통과 라고 출력
// 65점 미만이면 낙제라고 출력하시오.

// var kor = parseInt(prompt("국어 점수"));
// var eng = parseInt(prompt("영어 점수"));
// var math = parseInt(prompt("수학 점수"));
// var avg = parseInt((kor+eng+math)/3)

// if ( avg >= 65 ){
//     console.log(`국어점수:${kor} 영어점수:${eng} 수학점수:${math} 평균:${avg} 결과:통과`);
// }
// else{
//     console.log(`국어점수:${kor} 영어점수:${eng} 수학점수:${math} 평균:${avg} 결과:낙제`);
// }

// 동전 앞면 뒷면 맞추기

// css 선택자 id - # , class - .

// 브라우저에 html태그가 모두 로딩(화면표시)되면 자바스크립트 코드를 실행시키는 방법
var com = Math.floor(Math.random() * 3) + 1;

window.onload = function () {
    //가위 바위 보 게임 만들기
    // 1.가위 2.바위 3.보

    var scis = document.getElementById("scissors");
    var rock = document.getElementById("rock");
    var paper = document.getElementById("paper");

    scis.addEventListener("click", function () {
        //가위 클릭
        if (com == 1) {
            alert("비김");
        } else if (com == 3) {
            alert("승리");
        } else {
            alert("패배");
        }
        com = Math.floor(Math.random() * 3) + 1;
        scis.style.background = "red";
        paper.style.background = "white";
        rock.style.background = "white";
    });
    rock.addEventListener("click", function () {
        // 바위 클릭
        if (com == 2) {
            alert("비김");
        } else if (com == 1) {
            alert("승리");
        } else {
            alert("패배");
        }
        com = Math.floor(Math.random() * 3) + 1;
        rock.style.background = "red";
        scis.style.background = "white";
        paper.style.background = "white";
    });
    paper.addEventListener("click", function () {
        // 보 클릭
        if (com == 3) {
            alert("비김");
        } else if (com == 2) {
            alert("승리");
        } else {
            alert("패배");
        }
        com = Math.floor(Math.random() * 3) + 1;
        paper.style.background = "red";
        scis.style.background = "white";
        rock.style.background = "white";
    });

    // 자바스크립트로 스타일을 주면 태그에 바로 들어가기 때문에
    // css나 다른 명령어로 효과를 줘도 효과가 안들어감.

    // var com=parseInt(Math.random()*3)+1;
    // var user=parseInt(prompt("1.가위 2.바위 3.보"));

    // if ( user - com == 0 ){
    //     alert("비겼습니다");
    // }else if( user-com == 1 || user-com == -2 ){
    //     alert("이겼습니다");
    // }else{
    //     alert("졌습니다");
    // }

    // if ( user == com ){
    //     alert("비겼습니다");
    // }else if( user==1&&com==3 || user==2&&com==1 || user==3&&com==2 ){
    //     alert("이겼습니다");
    // }else{
    //     alert("졌습니다");
    // }

    //세개의 정수를 입력받아 가장 작은수 출력, 모두 같다면 같다 출력

    // var num1=parseInt(prompt("첫번째 정수"));
    // var num2=parseInt(prompt("두번째 정수"));
    // var num3=parseInt(prompt("세번째 정수"));

    // if( num1==num2 && num1==num3 ){
    //     alert("모두 같은 숫자");
    // }else if(num1 < num2 && num1 < num3){
    //     alert("작은수 : " + num1);
    // }else if(num2 < num3){
    //     alert("작은수 : " + num2);
    // }else{
    //     alert("작은수 : " + num3);
    // }

    // // if( num1==num2 && num1==num3 ){
    // //     alert("모두 같은 숫자");
    // // }else if(num1 < num2 && num1 < num3){
    // //     alert("작은수 : " + num1);
    // // }else if(num2 < num3 && num2 < num1){
    // //     alert("작은수 : " + num2);
    // // }else if(num3 < num1 && num3 < num2){
    // //     alert("작은수 : " + num3);
    // // }

    // if(num1 < num2){
    //     if(num1 < num3){
    //         alert("작은수 : " + num1);
    //     }else{
    //         alert("작은수 : " + num3);
    //     }
    // }else if(num2 < num3){
    //     alert("작은수 : " + num2);
    // }else{
    //     alert("작은수 : " + num3);
    // }

    // var coin = Math.floor(Math.random()*2)+1;

    // // javascript html태그 선택방법
    // var front = document.getElementById("front");
    // var back = document.getElementById("back");

    // front.addEventListener("click", function(){
    //     if( coin == 1 ){
    //         alert("정답!");
    //     }
    //     else{
    //         alert("땡!");
    //     }
    //     // alert("앞면 선택");
    // });

    // back.addEventListener("click", function(){
    //     if ( coin == 2 ){
    //         alert("정답!");
    //     }
    //     else{
    //         alert("땡!");
    //     }
    //     // alert("뒷면 선택");
    // });
};
