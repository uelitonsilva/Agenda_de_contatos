const form = document.getElementById('form-contatos');
const contatos = [];
const telefones = [];
let linhas = '';


form.addEventListener("submit", function (e) {
  e.preventDefault();
  adicionaContato();
  atualizaTabela();
});
  
function adicionaContato() {

  const inputNomes = document.getElementById('nome-contato');
  const inputTelefones = document.getElementById('numero-tel');

  
  
  if(contatos.includes(inputNomes.value)) {
    alert(`O nome : ${inputNomes.value} ja foi adicionado!`)
  }
  else if(telefones.includes(inputTelefones.value)) {
    alert(`O telefone : ${inputTelefones.value} ja foi adicionado!`)
  }
  else {

  contatos.push(inputNomes.value);
  telefones.push(inputTelefones.value);
  
  let linha = '<tr>';
  linha += `<td>${inputNomes.value}</td>`;
  linha += `<td>${inputTelefones.value}</td>`;
  linha += '</tr>';

  linhas += linha;
}

  inputNomes.value = "";
  inputTelefones.value = "";
}

function atualizaTabela() {
  const corpoTabela = document.querySelector('tbody');
  corpoTabela.innerHTML = linhas;
};