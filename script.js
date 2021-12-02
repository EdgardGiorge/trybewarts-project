const email = document.getElementById('loginEmail');
const password = document.getElementById('loginPassword');
const loginButton = document.getElementById('loginButton');

function login() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

loginButton.addEventListener('click', login);
