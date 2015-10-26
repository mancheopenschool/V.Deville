/**
 * Created by valentin on 20/10/15.
 */

$(document).ready(function () {

    /* activate scrollspy menu */
    $('body').scrollspy({
        target: '#bs-example-navbar-collapse-1',
        offset: 50
    });

    /* smooth scrolling sections */
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1200);
                return false;
            }
        }
    });


});

$('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
});