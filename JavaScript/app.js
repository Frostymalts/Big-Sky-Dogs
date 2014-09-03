
var main = function() {
    $("#target").keypress(function(event){
        var current = $("")
        if(event.which === 39) {
            $('.btn').addClass("disabled")
        } else if (event.which === 37) {

        }
    });
}

$(document).ready(main);