// Libreria Rellax - Efecto Parallax
var rellax = new Rellax('.rellax');


// Libreria ScrollReveal - Animaciones de Scroll
window.sr = new ScrollReveal();

sr.reveal('.menu', {
    duration: 3000,
    origin: 'bottom',
    distance: '-12rem',
})

sr.reveal('.info', {
    duration: 2500,
    origin: 'rigth',
    distance: '-12rem'
})

sr.reveal('.team', {
    duration: 2500,
    origin: 'left',
    distance: '-12rem'
})


// Libreria Glider.js
window.addEventListener('load', function(){
    new Glider(document.querySelector('.lista'), {
        slidesToShow: 1,
        scrollLock: true,
        dots: '.indicadores',
        arrows: {
            prev: '.anterior',
            next: '.siguiente'
        }
    });
})
