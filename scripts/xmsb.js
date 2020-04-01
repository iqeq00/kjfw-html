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
});