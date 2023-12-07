// <i class="bi bi-x-circle"></i>


// 생성자 함수
function memo(num, content, importance) { //작성된 메모 저장 객체
    this.num = num;
    this.content = content;
    this.importance = importance;
}

memo.prototype.create = function (i) {
    return `<div class='memoItem'>
        <b>${this.num}</b>
        <h3>${this.content}</h3>
        <div style='width:70px;background:${this.importance.color}'>${this.importance.text}</div>
        <div class='del' data-index='${i}><i class="bi bi-x-circle"></i></div>
    </div>`
}

function importStyle(text, color) { //메모의 중요도 스타일 객체
    this.text = text;
    this.color = color;
}

// 전역변수 - 함수, 객체메서드, 제어문등 어느곳에서도 사용가능한 변수
const memo_list = new Array(); // 메모객체가 저장될 배열
// 배열앞에 타입으로 const를 붙여주면 배열안에 데이터는 변경 가능하지만
// 다른 배열로 변경 할 수는 없다.
const import_list = new Array();//중요도 스타일 객체 저장 배열
let num = 1; // 메모번호


//초기화 - document 객체가 모두 로드 되면 실행 할 초기 작업
//        document 객체 로드 - window.onload를 뜻함

$(function () {
    $("#save").on("click", save); //등록버튼 클릭시 동작

    //option태그에 사용할 텍스트를 위해 importStyle 객체를 먼저 생성한다. 
    import_list.push(new importStyle("매우 중요", "royalblue"));
    import_list.push(new importStyle("중요", "seagreen"));
    import_list.push(new importStyle("보통", "goldenrod"));
    import_list.push(new importStyle("낮음", "orangered"));
    import_list.push(new importStyle("매우 낮음", "crimson"));

    //importStyle객체를 option태그에 넣어 select에 추가
    // $.each(배열, function(i, v){   }) i: 배열의 인덱스, v: 배열의 값
    $.each(import_list, function (i, v) {
        $("#import").append($("<option>").attr("value", i).text(v.text));
        // $("#import") : id가 import인 태그 선택
        // .append() : 태그에 자식으로 추가하기
        // $("<option>") : option 태그 생성
        // .attr("value", i) : 태그에 value속성을 i값으로 지정하기
        // .text(v.text) : 태그에 텍스트를 v객체에 text키의 value로 넣기

    });

});

function save() { //등록버튼 클릭하면 동작함수
    // 함수의 기능 : 작성한 메모와 중요도를 화면에 출력하는 기능
    var text = $("#memo").val(); //id가 memo인 input태그에 작성한 값 가져오기
    var 중요도 = $("#import").val(); //id가 import인 select태그에서 선택한 option 값
    //          $("#import option:selected").val();

    memo_list.push(new memo(num, text, import_list[중요도]));

    var last = memo_list.length - 1;
    // memo_list 배열에 memo객체를 저장 후 저장된 memo 객체의 인덱스 구하기

    // append - 태그의 자식으로 마지막에 추가 (자식)
    // after - 현재 선택한 태그 뒤에 추가 (형제)
    // prepend - 태그의 자식으로 앞에 추가 (자식)
    // before - 현재 선택한 태그 앞에 추가 (형제)
    $(".memoList").prepend(memo_list[last].create(num));
    num++;

    // 삭제 아이콘 클릭 기능 적용

    $(".del").on("click", del_memo);

}

let f = true;

function del_memo(n) {

    $.each(memo_list, function (i, v) { //memo객체저장된 배열 전체 조회
        if (n == memo_list[i].num) { //삭제할 번호와 일치하는 memo객체 찾기
            memo_list.splice(i, 1); //배열에서 삭제
        }
    });

    $(".memoList").empty(); //목록 태그 전체 비우기
    for (var v of memo_list) { //memo_list 배열에 있는 memo객체 다시 출력
        $(".memoList").prepend(v.create(v.num));
    }


    // var div = $(this); //삭제하고자 클릭한 아이콘의 div
    //parent() : 바로 위의 부모 태그 찾기
    //parents() : 위에 있는 모든 부모 태그들
    var index = div.parent("index");

    $(".memoList").empty;
    $.each(memo_list, function (idx, item) {
        $(".memoList").prepend(item.create(idx));
    });

    $(".del").on("click", del_memo);

    //empty() : 선택한 태그안에 전부를 비우기
    //remove() : 선택한 태그안에 전부를 삭제하고 자기 자신도 삭제
    //unwrap() ; 선택한 태그의 부모를 삭제
    // parent.remove();


}







/*
    맵 만들어오기
    가로 7칸 세로 7칸 의 정사각형

    대한민국과 일본도시 이름으로 칸을 채워 오세요
    각 면 마다 서로 다른 색을 주세요

*/






// var select = document.getElementById("import");
// var opt = document.createElement("option");
// var text = document.createTextNode("매우중요");
// opt.appendChild(text);
// select.appendChild(opt);
// 새로운 html태그 생성 - document.createElement("태그이름")
// text생성 - documnet.createTextNode("텍스트");
// 태그의 속성 추가 - 태그.setAttribute("id","myname"); -> 태그에 id를넣어준다.

// createElement("div") -> $("div")
// createTextNode("아하") -> .text("아하")
// .appendChild(태그 또는 텍스트) -> .append(태그 또는 텍스트)
// setAttribute("id","aa") -> .attr("id","aa")
// getAttribute("id") -> .attr("id")