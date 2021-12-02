const email = document.getElementById('loginEmail');
const password = document.getElementById('loginPassword');
const loginButton = document.getElementById('loginButton');
const submitButton = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');

submitButton.disabled = true;

function login() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

function checkInfo() {
  if (agreement.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

agreement.addEventListener('click', checkInfo);
loginButton.addEventListener('click', login);
