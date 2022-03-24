/*===== Menu mobile =====*/
const navMenu = document.getElementById('navMenu'),
    toggleMenu = document.getElementById('navToggle'),
    closeMenu = document.getElementById('navClose')

// Abre o menu mobile
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

// Fecha o menu mobile
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})


/*===== GSAP ANIMATION =====*/
/*--- Animação do conteudo----*/
// NAV
gsap.from('.nav__logo, .navToggle', {opacity: 0, duration: 1, delay:2, y: 10})
gsap.from('.navItem', {opacity: 0, duration: 1, delay: 2.1, y: 30, stagger: 0.2,})

// HOME
gsap.from('.homeTitle', {opacity: 0, duration: 1, delay:1.6, y: 30})
gsap.from('.homeDescription', {opacity: 0, duration: 1, delay:1.8, y: 30})
gsap.from('.homeButton', {opacity: 0, duration: 1, delay:2.1, y: 30})

