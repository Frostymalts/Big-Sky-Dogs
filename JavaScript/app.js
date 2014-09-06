
var main = function() {
    $(".body").keypress(function(event){
        var current = $(".active");
        var next = current.next();
        var prev = current.prev();

        if(next.length() === 0) {
            next = $(".li").first();
        }
        if (prevSlide.length === 0) {
            prevSlide = $('.li').last();
        }
        if(event.which === 39) {
            current.fadeOut(600).removeClass("active");
            next.fadeIn(600).addClass("active");
        } else if (event.which === 37) {

        }
    });
}

$(document).ready(main);