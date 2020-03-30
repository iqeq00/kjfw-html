function fontLength(title, num) {
    var val = title.replace(/\s+/g, "");
    if (val.length > num) {
        val = val.substr(0, num) + "...";
    }
    return val;
}

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

    $(".noticeList a").each(function (index, element) {
        var tit = fontLength($(this).html(), 25)
        $(this).html(tit)
    });

    $(".noticeList li").hover(function () {
        $(this).addClass("active");
    }, function () {
        $(this).removeClass("active");
    });

    $(".resources li").hover(function () {
        $(this).addClass("active");
    }, function () {
        $(this).removeClass("active");
    });
});