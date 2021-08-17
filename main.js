document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.cards1', { delay: 500 });
ScrollReveal().reveal('.banner1', { delay: 500 });
ScrollReveal().reveal('.banner2', { delay: 500 }); 
ScrollReveal().reveal('.social', { delay: 500 });
ScrollReveal().reveal('.footer-link', { delay: 500 });


