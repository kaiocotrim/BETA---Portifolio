document.addEventListener('DOMContentLoaded', function () {
    const btnAbrirMenu = document.getElementById('btn-abrir-menu');
    const menuMobile = document.getElementById('menu-mobile');
    const btnFecharMenu = document.querySelector('.btn-fechar i');
    const overlayMenu = document.querySelector('.overlay-menu');

    // Função para abrir o menu
    function abrirMenu() {
        menuMobile.style.display = 'block';
        menuMobile.style.height = '100vh';
        overlayMenu.style.display = 'block';
    }

    // Função para fechar o menu
    function fecharMenu() {
        menuMobile.style.height = '0vh';
        overlayMenu.style.display = 'none';
        setTimeout(() => {
            menuMobile.style.display = 'none';
        }, 300);
    }

    // Abrir o menu ao clicar no botão de abrir
    btnAbrirMenu.addEventListener('click', abrirMenu);

    // Fechar o menu ao clicar no botão de fechar ou no overlay
    btnFecharMenu.addEventListener('click', fecharMenu);
    overlayMenu.addEventListener('click', fecharMenu);
});
