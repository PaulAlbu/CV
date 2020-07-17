$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 4) {
            $("header").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $("header").removeClass("active");
        }
    });
});
