// Função para verificar se o usuário já aceitou ou negou os cookies
function checkCookieConsent() {
    const cookieAccepted = localStorage.getItem('cookiesAccepted');
    const cookieDenied = localStorage.getItem('cookiesDenied');
    if (cookieAccepted || cookieDenied) {
        document.getElementById('cookie-notification').style.display = 'none';
    } else {
        document.getElementById('cookie-notification').style.display = 'flex';
    }
}

// Função para lidar com a aceitação de cookies
function acceptCookies() {
    const cookies = document.cookie;
    localStorage.setItem('cookiesAccepted', 'true'); // Marca que o usuário aceitou os cookies

    // Pode enviar os cookies para o servidor ou armazená-los conforme necessário
    console.log("Cookies coletados:", cookies); // Exemplo de como capturar cookies

    document.getElementById('cookie-notification').style.display = 'none'; // Esconde a notificação
}

// Função para lidar com a negação de cookies
function denyCookies() {
    localStorage.setItem('cookiesDenied', 'true'); // Marca que o usuário negou os cookies
    document.getElementById('cookie-notification').style.display = 'none'; // Esconde a notificação
}

// Adiciona eventos para os botões de aceitar e negar
document.getElementById('accept-cookies').addEventListener('click', acceptCookies);
document.getElementById('deny-cookies').addEventListener('click', denyCookies);

// Verifica o consentimento de cookies quando a página for carregada
window.onload = checkCookieConsent;
