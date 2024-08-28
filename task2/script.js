window.addEventListener('scroll', function() {
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(function(element) {
        let speed = 0.5; 
        let offset = window.pageYOffset * speed;
        element.style.backgroundPositionY = offset + 'px';
    });
});
