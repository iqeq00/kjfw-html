$(function () {
    $(".fullSlide").slide({
        titCell: ".hd ul",
        mainCell: ".bd ul",
        effect: "leftLoop",
        vis: "auto",
        autoPlay: true,
        autoPage: true,
        trigger: "click"
    });

    $(".information li").hover(function () {
        $(this).addClass("active");
    }, function () {
        $(this).removeClass("active");
    });
});