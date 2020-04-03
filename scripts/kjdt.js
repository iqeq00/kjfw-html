$(function () {
    $(".dynamic ul li .text").hover(function () {
        $(this).addClass("active");
        $(this).removeClass("text");
    }, function () {
        $(this).removeClass("active");
        $(this).addClass("text");
    });
});