const buttonMenuMobile = document.querySelector('.button-menu-mobile');

function toggleMenu() {
    const nav = document.querySelector('.header-nav');
    nav.classList.toggle('active');
    
    if(nav.classList.contains('active')) {
        buttonMenuMobile.textContent="X";
    } else {
        buttonMenuMobile.textContent="|||";
    }
}

buttonMenuMobile.addEventListener('click', toggleMenu);