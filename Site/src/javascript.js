// Armazena os dados do usuário localmente no navegador
function saveUserData(username, password) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
}

// Valida o login
function validateLogin(inputUsername, inputPassword) {
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (inputUsername === savedUsername && inputPassword === savedPassword) {
        return true;
    }
    return false;
}

// Manipula o evento de registro
function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    if (username && password) {
        saveUserData(username, password);
        alert('Registro concluído com sucesso!');
        document.getElementById('registerForm').reset(); // Reseta o formulário de registro
    } else {
        alert('Por favor, preencha todos os campos de registro.');
    }
}

// Manipula o evento de login
function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (validateLogin(username, password)) {
        alert('Login realizado com sucesso!');
        window.location.href = 'pagina_de_sucesso.html'; // Redireciona para outra página após login
    } else {
        document.getElementById('loginError').style.display = 'block'; // Mostra mensagem de erro
    }
}

// Esconde a mensagem de erro ao tentar novamente
function hideError() {
    document.getElementById('loginError').style.display = 'none';
}

// Adiciona event listeners aos formulários de login e registro
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    login();
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    register();
});

// Reseta o erro ao interagir com os campos de login
document.getElementById('loginUsername').addEventListener('input', hideError);
document.getElementById('loginPassword').addEventListener('input', hideError);