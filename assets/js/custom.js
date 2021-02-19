
/// some script

// jquery ready start
$(document).ready(function () {
    // jQuery code


    $("[data-trigger]").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        var offcanvas_id = $(this).attr('data-trigger');
        $(offcanvas_id).toggleClass("show");
        $('body').toggleClass("offcanvas-active");
        $(".screen-overlay").toggleClass("show");
    });

    // Close menu when pressing ESC
    $(document).on('keydown', function (event) {
        if (event.keyCode === 27) {
            $(".mobile-offcanvas").removeClass("show");
            $("body").removeClass("overlay-active");
        }
    });

    $(".btn-close, .screen-overlay").click(function (e) {
        $(".screen-overlay").removeClass("show");
        $(".mobile-offcanvas").removeClass("show");
        $("body").removeClass("offcanvas-active");


    });


}); // jquery end


// search 
function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
    document.getElementById("myOverlays").style.zIndex = "1";
    document.getElementById("myOverlayss").style.zIndex = "unset";
}

function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
    document.getElementById("myOverlays").style.zIndex = "none";
    document.getElementById("myOverlayss").style.zIndex = "1030";
}



