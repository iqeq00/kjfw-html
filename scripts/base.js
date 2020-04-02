function getShorturl() {
    var url = window.location.href;
    var index = url.lastIndexOf("\/");
    return url.substring(index,url.length);
}

$(function () {
    var url = getShorturl();
    $(".header").load("../html/header.html", function () {
        $(".menu li .menuA").each(function () {
            $(this).removeClass("active");
            var lang = $(this).attr("lang");
            if (url.indexOf(lang) > 0) {
                $(this).addClass("active");
            }
        });
    });

    $(".footer").load("../html/footer.html");

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
});