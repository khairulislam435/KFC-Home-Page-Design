




$(document).ready(function() {
    $('.container-fluid').carousel({
        num: 5,
        maxWidth: 450,
        maxHeight: 300,
        distance: 50,
        scale: 0.6,
        animationTime: 1000,
        showTime: 4000
    });
});


$('.portfolio-item').isotope({
    itemSelector : '.item',
    layoutMode : 'fitRows'
});

$('.portfolio-menu .text-center a').click(function () {
    event.preventDefault();
    $('.portfolio-menu .text-center a').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $('.portfolio-item').isotope({
        filter: selector
    });
});



$('.title-wrap').isotope({
    itemSelector : '.item',
    layoutMode : 'fitRows'
});

$('.filter-wrap li').click(function () {
    event.preventDefault();
    $('.filter-wrap li').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $('.title-wrap').isotope({
        filter: selector
    });
});


$('.counter').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    $({ countNum: $this.text()}).animate({
            countNum: countTo
        },
        {
            duration: 8000,
            easing:'linear',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
                //alert('finished');
            }
        });
});

lightbox.option({
    'resizeDuration': 2000,
    'wrapAround': true,
    'alwaysShowNavOnTouchDevices': true,
    'disableScrolling': true,
    'displayFormTop': 50,
    'showImagesNumberLabel': true
});

