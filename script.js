const email = document.getElementById('loginEmail');
const password = document.getElementById('loginPassword');
const loginButton = document.getElementById('loginButton');
const submitButton = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');
const textArea = document.getElementById('textarea');
const countVis = document.getElementById('counter');
const inputName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-lastname');
const inputEmail = document.getElementById('input-email');
const house = document.getElementById('house');
const materias = document.getElementsByName('checkboxConteudo');
const familia = document.getElementsByName('family');
const nota = document.getElementsByName('rate');
const divResposta = document.getElementById('resposta');
let count = 500;
countVis.innerText = count;
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

function addCount() {
  count = 500;
  count -= textArea.value.length;
  countVis.innerText = count;
}
const rNome = document.getElementById('rNome');
const rEmail = document.getElementById('rEmail');
const rCasa = document.getElementById('rCasa');
const rFamilia = document.getElementById('rFamilia');
const rMateria = document.getElementById('rMaterias');
const rRate = document.getElementById('rAvaliacao');
const rObs = document.getElementById('rObs');
const arrayMaterias = [];
function devolveMaterias() {
  let rMateriasTexto = 'Matérias: ';
  for (let i = 0; i < arrayMaterias.length; i += 1) {
    if (i === 0) {
      rMateriasTexto += arrayMaterias[i];
    } else {
      rMateriasTexto += `, ${arrayMaterias[i]}`;
    }
  }
  return rMateriasTexto;
}
function criaMaterias() {
  for (let i = 0; i < materias.length; i += 1) {
    if (materias[i].checked) {
      arrayMaterias.push(materias[i].value);
    }
  }
  console.log(arrayMaterias);
  return devolveMaterias();
}

function criaRate() {
  for (let i = 0; i < nota.length; i += 1) {
    if (nota[i].checked) {
      const rRateText = nota[i].value;
      localStorage.setItem('Rate', rRateText);
    }
  }
}

function criaResposta() {
  const rNomeTexto = `Nome: ${inputName.value} ${inputLastName.value}`;
  localStorage.setItem('Nome', rNomeTexto);
  const rEmailTexto = `Email: ${inputEmail.value}`;
  localStorage.setItem('Email', rEmailTexto);
  const rCasaTexto = `Casa: ${house.value}`;
  localStorage.setItem('Casa', rCasaTexto);
  for (let i = 0; i < familia.length; i += 1) {
    if (familia[i].checked) {
      const rFamiliaTexto = familia[i].value;
      localStorage.setItem('Familia', rFamiliaTexto);
    }
  }
  localStorage.setItem('Materias', criaMaterias());
  criaRate();
  const rObsText = `Observações: ${textArea.value}`;
  localStorage.setItem('Obs', rObsText);
}
function getResposta() {
  if (localStorage.length !== 0) {
    rNome.innerText = localStorage.getItem('Nome');
    rEmail.innerText = localStorage.getItem('Email');
    rCasa.innerText = localStorage.getItem('Casa');
    rFamilia.innerText = localStorage.getItem('Familia');
    rMateria.innerText = localStorage.getItem('Materias');
    rRate.innerText = localStorage.getItem('Rate');
    rObs.innerText = localStorage.getItem('Obs');
  }
}
getResposta();
submitButton.addEventListener('click', criaResposta);
textArea.addEventListener('keyup', addCount);
agreement.addEventListener('click', checkInfo);
loginButton.addEventListener('click', login);
