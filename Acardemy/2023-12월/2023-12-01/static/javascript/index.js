let slide_idx = 0;

$(function () {
    // $(".menuList>.menuItem").on("mouseover", function () {
    //     $(this).children(".subMenu").show();
    // });
    // // 보여주는 방식
    // // show 나타나기 , hide 숨기기 , toggle 보였다가 안보였다가
    // // fadeIn 서서히보여주기 , fadeOut 서서히사라지기 , fadeToggle
    // // slideDown 스르륵보여주기 , slideUp 스르륵사라지기 , slideToggle

    // $(".menuList>.menuItem").on("mouseleave", function () {
    //     $(this).children(".subMenu").hide();
    // });

    //슬라이드 이미지 구현
    $(".rightBt").on("click", function () {
        if (slide_idx != $(".slideImg").length - 1) {
            //마지막 이미지일 경우 이동 불가
            slide_idx++;
            $(".slideList").css("right", slide_idx * 1200 + "px");
        }
    });

    $(".leftBt").on("click", function () {
        if (slide_idx != 0) {
            //첫번재 이미지 일 경우 이동 불가
            slide_idx--;
            $(".slideList").css("right", slide_idx * 1200 + "px");
        }
    });

    // 자동 슬라이드 이미지
    // 시간을 제어
    // setTimeout - 지정한 시간 이후 단 한번 동작,
    // setInterval - 지정한 시간 간격으로 동작

    // setInterval ( 실행할 내용, 시간(밀리세컨드));

    setInterval(function () {
        if (slide_idx != $(".slideImg").length - 1) {
            //마지막 이미지일 경우 이동 불가
            slide_idx++;
            $(".slideList").css("right", slide_idx * 1200 + "px");
        } else {
            slide_idx = 0;
            $(".slideList").css("right", slide_idx * 1200 + "px");
        }
    }, 5000);
});
