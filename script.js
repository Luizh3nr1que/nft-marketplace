window.addEventListener('DOMContentLoaded', function () {
    var timerElement = document.getElementById('timer');
    var countdown = 7 * 24 * 60 * 60;

    function updateTimer() {
        var days = Math.floor(countdown / (24 * 60 * 60));
        var hours = Math.floor((countdown % (24 * 60 * 60)) / (60 * 60));
        var minutes = Math.floor((countdown % (60 * 60)) / 60);
        var seconds = Math.floor(countdown % 60);

        var formattedTime =
            ('0' + days).slice(-2) + 'd ' +
            ('0' + hours).slice(-2) + ':' +
            ('0' + minutes).slice(-2) + ':' +
            ('0' + seconds).slice(-2);

        timerElement.textContent = formattedTime;

        if (countdown <= 0) {
            clearInterval(timerInterval);
            countdown = 7 * 24 * 60 * 60;
            setTimeout(function () {
                timerInterval = setInterval(updateTimer, 1000);
            }, 1000);
        }

        countdown--;
    }

    var timerInterval = setInterval(updateTimer, 1000);

    updateTimer();
});






const button = document.getElementById('abrirWallets');

function abrirWallet() {
    const body = document.querySelector('body');
    const wallet = document.querySelector('.wallet-container');

    body.style.overflow = 'hidden';
    wallet.style.display = 'block';
}
button.addEventListener('click', abrirWallet);



const buttonFechar = document.getElementById('fechar-wallet');

function fecharWallet() {
    const body = document.querySelector('body');
    const wallet = document.querySelector('.wallet-container');

    body.style.overflow = 'scroll'
    wallet.style.display = 'none';
}
buttonFechar.addEventListener('click', fecharWallet);



var nft = document.querySelectorAll('.astronauta');
var erro = document.querySelector('.erro');

for (var i = 0; i < nft.length; i++) {
    nft[i].addEventListener('click', () => {
        erro.style.display = 'block';
        erro.innerHTML = 'Por favor, conecte-se a uma carteira de criptomoedas para comprar!';

        setTimeout(function () {
            erro.innerHTML = '';
            erro.style.display = 'none';
        }, 5000);
    });
}



const buttonPerfil = document.getElementById('abrirPerfil');
const perfil = document.querySelector('.menu');

buttonPerfil.addEventListener('click', () => {
    if (perfil.style.display === 'none') {
        perfil.style.display = 'block';
    } else {
        perfil.style.display = 'none';
    }
});




function togglemenu() {
    const menuMobile = document.getElementById('menu-mobile')

    if (menuMobile.className === "menu-mobile-active") {
        menuMobile.className = "menu-mobile";
    } else {
        menuMobile.className = "menu-mobile-active"
    }
}
