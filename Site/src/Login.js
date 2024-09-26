function register() {
    const username = document.getElementById('registerUsername').value.trim();
    const password = document.getElementById('registerPassword').value.trim();

    // Verifica se o usuário ou senha estão vazios
    if (username === '' || password === '') {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Armazena os dados no localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    // Mostra o pop-up de sucesso
    showPopup();
    document.getElementById('registerForm').reset(); // Limpa o formulário
    toggleForm(); // Alterna para a tela de login
}

// Função para validar o login
function validateLogin(username, password) {
    // Recupera os dados do localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Verifica se o nome de usuário e a senha correspondem aos armazenados
    return storedUsername === username && storedPassword === password;
}

// Função de login
function login() {
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    // Validação de campos
    if (username === '' || password === '') {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Validação de login
    if (validateLogin(username, password)) {
        alert('Login realizado com sucesso!');
        // Armazena o nome do usuário na sessão para usar em outras páginas
        sessionStorage.setItem('username', username);
        window.location.href = 'index.html'; // Redireciona para a página inicial
    } else {
        document.getElementById('loginError').style.display = 'block'; // Mostra mensagem de erro
    }
}

// Exibe o pop-up de sucesso
function showPopup() {
    document.getElementById('successPopup').style.display = 'flex'; // Mostra o pop-up
}

// Fecha o pop-up de sucesso
function closePopup() {
    document.getElementById('successPopup').style.display = 'none'; // Esconde o pop-up
}

// Alterna entre os formulários de registro e login
function toggleForm() {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    
    if (registerForm.style.display === 'none') {
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';
    } else {
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    }
}

// Inicializa a tela de login ao carregar
window.onload = function() {
    toggleForm(); // Começa com o formulário de login visível
};