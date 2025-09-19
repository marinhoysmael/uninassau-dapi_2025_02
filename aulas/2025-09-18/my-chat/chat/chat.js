document.getElementById('logout-btn')
.addEventListener('click', function() {
    localStorage.clear();
    sessionStorage.clear();
    // Redireciona para a página de login (ajuste o caminho se necessário)
    window.location.href = '../login/login.html';
});