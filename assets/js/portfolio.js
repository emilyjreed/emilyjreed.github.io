(function ($) {
    "use strict";

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 54)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 56
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // Hide navbar when modals trigger
    $('.portfolio-modal').on('show.bs.modal', function (e) {
        $(".navbar").addClass("d-none");
    })
    $('.portfolio-modal').on('hidden.bs.modal', function (e) {
        $(".navbar").removeClass("d-none");
    })
    // Main page word changes
    var keywords = ["Developer", "Designer", "Creative", "Musician"];
    var count = 1;
    setInterval(function () {
        $("span.keyword").fadeOut(400, function () {
            $(this).html(keywords[count]);
            count++;
            if (count === keywords.length) {
                count = 0;
            } $(this).fadeIn(400);
        });
    }, 2000);

    // Welcome btn scroll down to About Me page
    function scrollToAnchor(aid){
        var sectionTag = $("section[id='"+ aid +"']");
        $('html,body').animate({scrollTop: sectionTag.offset().top},'slow');
    }
    
    $("#welcome-btn").click(function() {
       scrollToAnchor('about');
    });    

})(jQuery);