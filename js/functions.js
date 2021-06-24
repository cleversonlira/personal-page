//ao ser clicado, chama o toggleMenu
const buttonMenuMobile = document.querySelector('.button-menu-mobile');
buttonMenuMobile.addEventListener('click', toggleMenu);

//adiciona classe active se não tiver, remove se tiver.
function toggleMenu() {
    const nav = document.querySelector('.header-nav');
    nav.classList.toggle('active');
    document.querySelectorAll("img").forEach(img =>
        img.classList.toggle("opacity")
    );
    
    
    if(!nav.classList.contains('active')) {
        buttonMenuMobile.innerHTML='|||';
        //document.querySelector("#header-img").classList.remove("opacity");
    } else {
        buttonMenuMobile.innerHTML='&#10005';
        //document.querySelector("#header-img").classList.add("opacity");
    }
}

//para todos os links, caso clicado, chamo o closeMenu.
let arrayLinkMenu = document.querySelectorAll('a');
arrayLinkMenu.forEach(a => {
    if(!(a.id === 'back')) {
        a.addEventListener('click', closeMenu);
    }
});

//remove a classe active do nav, fechando então o menu e voltando ao ícone de hamburguer.
function closeMenu() {
    const nav = document.querySelector('.header-nav');
    console.log('entrou na closeMenu');
    nav.classList.remove('active');
    document.querySelectorAll("img").forEach(img =>
        img.classList.toggle("opacity")
    );
    document.querySelector('.button-menu-mobile').innerHTML='|||';
}

//Ao ser clicado o botão de enviar mensagem, chama o redirecionamento para whatsapp.
document.querySelector('#send-whatsapp').addEventListener('click', function () {
    const textareaMessage = document.querySelector('#message').value;    
    sendRedirect(textareaMessage, 'whatsapp');
});
//Ao ser clicado o botão de enviar mensagem, chama o redirecionamento para email.
document.querySelector('#send-email').addEventListener('click', function () {
    const textareaMessage = document.querySelector('#message').value;    
    sendRedirect(textareaMessage, 'email');
});

//verifico se é whatsapp ou email e envio a mensagem redirecionando em outra aba.
function sendRedirect(textareaMessage, tipo) {
    let url;
    if(!(textareaMessage === '')) {            
        if(tipo === 'whatsapp') {
            url = `https://api.whatsapp.com/send?phone=5511982428106&text=${textareaMessage}`;
        } else {
            url = `mailto:cleverson_lira@outlook.com?subject=Insira um assunto&body=${textareaMessage}`;
        }
        setTimeout(function() {             
            window.open(url, '_blank');
        },0001);
    }
}