const menu = window.document.getElementById('menu');


function AbrirMenu() {

    const tamanhoTela = window.innerWidth;
    
    if (tamanhoTela <= 900) {
        menu.style.width = '100%';
        menu.style.left = '0%';

    } else {
        menu.style.width = '100%';
        menu.style.left = '70%';
    }
}

function FucharMenu() {
    menu.style.width = 0;
    menu.style.left = '100%';
}
