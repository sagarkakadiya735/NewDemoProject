
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

// all slider
$(document).ready(function () {

    var owl1 = $("#owl-demo");

    owl1.owlCarousel({
        dots: false,
        items: 10, //10 items above 1000px browser width
        itemsDesktop: [1000, 4], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 5], // betweem 900px and 601px
        itemsTablet: [600, 5], //2 items between 600 and 0
        itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
    });
    var owl2 = $("#main-owl-demo");

    owl2.owlCarousel({
        // dots: true,
        loop: true,
        // dots: true,
        autoPlay: 3000,
        items: 3, //10 items above 1000px browser width
        itemsDesktop: [1000, 1], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 1], // betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0
        itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
    });
    var owl8 = $("#home-owl-demo");

    owl8.owlCarousel({
        // dots: true,
        // loop: true,
        // dots: true,
        // autoPlay: 3000,
        items: 1, //10 items above 1000px browser width
        itemsDesktop: [1000, 1], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 1], // betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0
        itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
        // , navigation: true,
        // navigationText: ["<img src='./assets/image/caret-right.png' width='15px'>", "<img src='./assets/image/caret-right.png' width='15px'>"]
        , navText: ["", ""],
        rewindNav: true,
    });
    var owl3 = $("#product-owl-demo");

    owl3.owlCarousel({
        // dots: true,
        // loop: true,
        // dots: true,
        // autoPlay: 3000,
        items: 3, //10 items above 1000px browser width
        itemsDesktop: [1000, 4], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 2], // betweem 900px and 601px
        itemsTablet: [600, 2], //2 items between 600 and 0
        itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
    });
    var owl4 = $("#prod-owl-demo");

    owl4.owlCarousel({
        // dots: true,
        // loop: true,
        // dots: true,
        // autoPlay: 3000,
        items: 3, //10 items above 1000px browser width
        itemsDesktop: [1000, 4], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 2], // betweem 900px and 601px
        itemsTablet: [600, 2], //2 items between 600 and 0
        itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
    });
    var owl5 = $("#prods-owl-demo");

    owl5.owlCarousel({
        // dots: true,
        // loop: true,
        // dots: true,
        // autoPlay: 3000,
        items: 3, //10 items above 1000px browser width
        itemsDesktop: [1000, 4], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 2], // betweem 900px and 601px
        itemsTablet: [600, 2], //2 items between 600 and 0
        itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
    });
    var owl6 = $("#pros-owl-demo");

    owl6.owlCarousel({
        // dots: true,
        // loop: true,
        // dots: true,
        // autoPlay: 3000,
        items: 3, //10 items above 1000px browser width
        itemsDesktop: [1000, 1], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 1], // betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0
        itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
    });

    // Custom Navigation Events
    $(".next").click(function () {
        owl.trigger('owl.next');
    })
    $(".prev").click(function () {
        owl.trigger('owl.prev');
    })
    $(".play").click(function () {
        owl.trigger('owl.play', 1000); //owl.play event accept autoPlay speed as second parameter
    })
    $(".stop").click(function () {
        owl.trigger('owl.stop');
    })

    $(".next").click(function () {
        owl8.trigger('owl.next');
    })
    $(".prev").click(function () {
        owl8.trigger('owl.prev');
    })
    $(".play").click(function () {
        owl8.trigger('owl.play', 1000); //owl.play event accept autoPlay speed as second parameter
    })
    $(".stop").click(function () {
        owl8.trigger('owl.stop');
    })

});
// all slider end



