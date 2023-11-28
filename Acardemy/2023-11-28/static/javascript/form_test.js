$(function () {
    $("#allchk").on("click", function () {
        var isCheck = $(this).is(":checked");
        if (isCheck) $(".agree").prop("checked", true);
        else $(".agree").prop("checked", false);
    });

    $(".agree").on("click", function () {
        var chk_count = $(".agree:checked").length;
        var all_count = $(".agree").length;
        if (chk_count == all_count) $("#allchk").prop("checked", true);
        else $("#allchk").prop("checked", false);
    });

    $("#pass").on("click", function () {
        var chk_count = $(".agree:checked").length;
        var all_count = $(".agree").length;
        if (chk_count != all_count)
            alert("모두 체크하세요");
    });
});

