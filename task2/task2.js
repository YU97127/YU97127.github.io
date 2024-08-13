$(window).on('scroll', function() {
    window.requestAnimationFrame(parallaxScroll);
});

function parallaxScroll() {
    var scrolled = $(window).scrollTop();

    $('.layer-1').css('transform', 'translateY(' + (scrolled * 0.25) + 'px)');
    $('.layer-2').css('transform', 'translateY(' + (scrolled * 0.5) + 'px)');
    $('.layer-3').css('transform', 'translateY(' + (scrolled * 0.75) + 'px)');
    
    $('.rock-1').css('transform', 'translateY(' + (400 - (scrolled * 0.8)) + 'px)');
    $('.rock-2').css('transform', 'translateY(' + (200 - (scrolled * 0.6)) + 'px)');
    $('.rock-3').css('transform', 'translateY(' + (500 - (scrolled * 0.4)) + 'px)');
    $('.rock-4').css('transform', 'translateY(' + (600 - (scrolled * 0.5)) + 'px)');
    $('.rock-5').css('transform', 'translateY(' + (600 - (scrolled * 0.7)) + 'px)');
    $('.rock-6').css('transform', 'translateY(' + (400 - (scrolled * 0.7)) + 'px)');
    $('.rock-7').css('transform', 'translateY(' + (600 - (scrolled * 0.5)) + 'px)');
    $('.rock-8').css('transform', 'translateY(' + (200 - (scrolled * 0.2)) + 'px)');
    $('.rock-9').css('transform', 'translateY(' + (200 - (scrolled * 0.4)) + 'px)');
}
