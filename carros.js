// Ejemplo de interacciones de parallax (efecto de fondo mientras se hace scroll).
window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    let hero = document.querySelector('.hero');
    hero.style.backgroundPosition = 'center ' + (scrollPosition * 0.5) + 'px';
});
