
let mid = ["abc", "good", "niceguy", "skyblue123", "tty", "jkr11", "kingpack", "joker"];
let mpw = ["1234", "a1234", "qwe123", "qwer1234", "asdf", "zxcv", "abcd", "holy"]


$(function () {

    $("#signBt").on("click", function () {
        if ($("#id").val() == '') {
            alert("아이디를 입력하세요");
            $("#id").focus();
        } else if ($("#pw").val() == '') {
            alert("비밀번호를 입력하세요");
            $("#pw").focus();
        }
        else {
            // 아이디 존재 유무
            var idx = mid.indexOf($("#id").val());
            if (idx == -1) {
                var ok = confirm("아이디가 존재하지 않습니다.\n회원가입을 하시겠습니까?");
                if (ok) location.href = "signup.html";
                alert("로그인 성공");
            } else if (mpw[idx] == $("#pw").val()) {
                alert("로그인성공");
            } else {
                alert("비밀번호가 일치 하지 않습니다.");
                $("#pw").val("").focus(); // 비밀번호 재입력을위해 비우고 커서두기
            }


            // for (var tmp in mid) {
            //     // for of -> 배열의 데이터가 저장 / for in -> 배열의 인덱스가 저장
            //     if (mid[tmp] == $("#id").val()) {
            //         if (mpw[tmp] == $("#pw").val()) {
            //             alert("로그인 성공");
            //             break;
            //         } else {
            //             alert("비밀번호가 일치하지 않습니다.");
            //         }

            //     }

            // }

        }

        // if ($("#id").val != "abc") { }
        // //로그인 시도가 된다면 - 아이디 비밀번호 올바르지 않은경우 
        // else if ($("#id").val != '' && $("#pw").val != '') {
        //     alert("아이디 또는 비밀번호가 올바르지 않습니다.");
        //     $("#id").val("").focus();
        //     $("#pw").val("");
        // }

    });

});