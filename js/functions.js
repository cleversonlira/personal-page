const buttonMenuMobile = document.querySelector('.button-menu-mobile');
buttonMenuMobile.addEventListener('click', toggleMenu);

function toggleMenu() {
    const nav = document.querySelector('.header-nav');
    nav.classList.toggle('active');
    
    if(!nav.classList.contains('active')) {
        buttonMenuMobile.innerHTML='|||';
        
    } else {
        buttonMenuMobile.innerHTML='&#10005';
    }
}


let arrayLinkMenu = document.querySelectorAll('.header-link');
arrayLinkMenu.forEach(a => a.addEventListener('click', closeMenu));

function closeMenu() {
    const nav = document.querySelector('.header-nav');
    console.log('entrou na closeMenu');
    nav.classList.remove('active');
    document.querySelector('.button-menu-mobile').innerHTML='|||';
}