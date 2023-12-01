//브라우저에 html태그가 모두 로드(화면표시) 되면 실행되는 스크립트 코드
window.onload=function(){


    // //주사위 게임 만들기
    // // 컴퓨터와주사위 게임을 한다
    // // 각자 주사위 하나씩 던진다. 주사위 값 큰쪽이 이긴다.

    // var com=Math.floor(Math.random()*6)+1;
    // var user=Math.floor(Math.random()*6)+1;

    // if(user>com){
    //     alert("나 : " + user + ", 컴 : " + com + ", 결과 : 승리");
    // }else if(user==com){
    //     alert("나 : " + user + ", 컴 : " + com + ", 결과 : 비김");
    // }else{
    //     alert("나 : " + user + ", 컴 : " + com + ", 결과 : 패배");
    // }

    // // 주사위 게임 만들기
    // // 컴퓨터와 주사위 게임을 한다
    // // 각자 주사위 두개씩 던진다. 주사위 합이 큰쪽이 이긴다.
    // // 단, 두 주사위 값이 같은 숫자가 나온쪽이 이긴다.
    // // 둘다 같은 숫자가 나온다면 합이 큰 쪽이 이긴다.

    // var com1 = Math.floor(Math.random()*6)+1;
    // var com2 = Math.floor(Math.random()*6)+1;
    // var user1 = Math.floor(Math.random()*6)+1;
    // var user2 = Math.floor(Math.random()*6)+1;

    // var com = com1+com2;
    // var user = user1+user2;

    // if(user>com){
    //     if( (com1==com2) && (user1!=user2) ){
    //         alert("나 : " +user1+","+user2+ ", 컴 : "+com1+","+com2+", 결과 : 패배");
    //     }else{
    //         alert("나 : " +user1+","+user2+ ", 컴 : "+com1+","+com2+", 결과 : 승리");
    //     }
    // }else if(user<com){
    //     if( (user1==user2) && (com1!=com2) ){
    //         alert("나 : " +user1+","+user2+ ", 컴 : "+com1+","+com2+", 결과 : 승리");
    //     }else{
    //         alert("나 : " +user1+","+user2+ ", 컴 : "+com1+","+com2+", 결과 : 패배");
    //     }
    // }else if(user=com){
    //     if( (user1==user2) && (com1!=com2) ){
    //         alert("나 : " +user1+","+user2+ ", 컴 : "+com1+","+com2+", 결과 : 승리");
    //     }else if( (user1!=user2) && (com1==com2) ){
    //         alert("나 : " +user1+","+user2+ ", 컴 : "+com1+","+com2+", 결과 : 패배");
    //     }else{
    //         alert("나 : " +user1+","+user2+ ", 컴 : "+com1+","+com2+", 결과 : 비김");
    //     }
    // }

    
    // 조건문 - if문 , switch문

    // if(a==10){
    //     alert("같다");
    // }else{
    //     alert("같지않다");
    // }


    // var a=1000;
    // switch(a){
    //     case 1:
    //         alert("1");
    //         break;
    //     case 1000:
    //         alert("1000");
    //         break;
    //     case 234:
    //         alert("234");
    //         break;
    //     case 10:
    //         alert("10 선택");
    //         break;
    // }

    var airjordan = 2;
    var airmax = 97;
    var alp = "나이키 에어조던 90 재고";
    switch( alp.split(" ")[1] ){
        case "에어조던":
            document.write("현재 재고수량은" + airjordan + "개");
            break;
        case "에어맥스":
            document.write("현재 재고수량은" + airmax + "개");
            break;
        case "a":
            document.write("apple");
            break;
        default:
            document.write("죄송합니다");
    }

    /*
        if(score>=90)
        else if(score>=80){}
        else if(score>=70){}
        else {}
    
    */

    var score =75;
    switch( parseInt(score/10)){
        case 10: case 9:
        document.write("A학점"); break;
        case 8:
        document.write("B학점"); break;
        case 7:
        document.write("C학점"); break;
        default:
            document.write("F학점")

    }

};