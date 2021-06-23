const buttonMenuMobile = document.querySelector('.button-menu-mobile');

function toggleMenu() {
    const nav = document.querySelector('.header-nav');
    nav.classList.toggle('active');
    
    if(!nav.classList.contains('active')) {
        buttonMenuMobile.innerHTML='|||';
        
    } else {
        buttonMenuMobile.innerHTML='&#10005';
    }
}

buttonMenuMobile.addEventListener('click', toggleMenu);