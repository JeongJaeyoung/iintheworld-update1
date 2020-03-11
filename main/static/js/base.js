
// SCROLL EVENT if문이 모바일, else가 데스크탑일 때
function myFunction(x) {
    if (x.matches) { // If media query matches
        var didScroll;
        var lastScrollTop = 0;
        var delta = 5;
        var navbarHeight = $('header').outerHeight();

        $(window).scroll(function (event) {
            didScroll = true;
        });

        setInterval(function () {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
        }, 250);

        function hasScrolled() {
            var st = $(this).scrollTop();

            // Make sure they scroll more than delta
            if (Math.abs(lastScrollTop - st) <= delta)
                return;

            // If they scrolled down and are past the navbar, add class .nav-up.
            // This is necessary so you never see what is "behind" the navbar.
            if (st > lastScrollTop && st > navbarHeight) {
                // Scroll Down
                $('header').removeClass('nav--down').addClass('nav--up');
            } else {
                // Scroll Up
                if (st + $(window).height() < $(document).height()) {
                    $('header').removeClass('nav--up').addClass('nav--down');
                }
            }

            lastScrollTop = st;
        }
    } else {
        var didScroll;
        var lastScrollTop = 0;
        var delta = 5;
        var navbarHeight = $('header').outerHeight();

        $(window).scroll(function (event) {
            didScroll = true;
        });

        setInterval(function () {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
        }, 250);

        function hasScrolled() {
            var st = $(this).scrollTop();

            // Make sure they scroll more than delta
            if (Math.abs(lastScrollTop - st) <= delta)
                return;

            // If they scrolled down and are past the navbar, add class .nav-up.
            // This is necessary so you never see what is "behind" the navbar.
            if (st > lastScrollTop && st > navbarHeight) {
                // Scroll Down
                $('header').removeClass('nav-down').addClass('nav-up');
            } else {
                // Scroll Up
                if (st + $(window).height() < $(document).height()) {
                    $('header').removeClass('nav-up').addClass('nav-down');
                }
            }

            lastScrollTop = st;
        }
    }
}

var x = window.matchMedia("(max-width: 980px)")
myFunction(x)
x.addListener(myFunction) 

// GNB-FRIST_ROW - HAMBURGER_BUTTON - LARGE CSS
$(function () {
    $("#first_row-hamburger_button-large_css").on("click", function () {
        $(".sub-menu").toggleClass("hide");
    });
});

// GNB-FIRST_ROW - HAMBURGER_BUTTON - SMALL CSS
$(function () {
    $(".sample-class .btn-menu").on("click", function () {
        $(".sample-class").toggleClass("menuon");
    });
});



// GNB-SECOND_ROW - TOPIC_BUTTON
$(function () {
    $(".topic-menu").on("click", function () {
        $(".topic-class").toggleClass("menu_on");
    });
});
