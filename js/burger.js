document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burger-menu');
    const navContainer = document.getElementById('nav-container');
    const body = document.body;
    
    burgerMenu.addEventListener('click', function() {
        burgerMenu.classList.toggle('active');
        navContainer.classList.toggle('active');
        body.classList.toggle('menu-open');
    });
    
    const navLinks = document.querySelectorAll('.header-nav-list-item a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            burgerMenu.classList.remove('active');
            navContainer.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });
    
    navContainer.addEventListener('click', function(e) {
        if (e.target === navContainer) {
            burgerMenu.classList.remove('active');
            navContainer.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });
    
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            burgerMenu.classList.remove('active');
            navContainer.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });
});