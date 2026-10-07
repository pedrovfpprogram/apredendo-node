// CADASTRO SIMPLES - Node.js
// Para rodar: node cadastro.js

const fs = require('fs');

// Esta função faz o mesmo que o input() do Python
function input(pergunta) {
  process.stdout.write(pergunta);
  let texto = '';
  const letra = Buffer.alloc(1);
  while (fs.readSync(0, letra, 0, 1) > 0) {
    if (letra.toString() === '\n') break;
    texto += letra.toString();
  }
  return texto.replace('\r', '').trim();
}

// A lista de pessoas (igual a uma lista em Python)
let pessoas = [];

function cadastrar() {
  let nome = input('Nome: ');
  let email = input('Email: ');

  if (nome === '' || email === '') {
    console.log('Nome e email são obrigatórios!');
    return;
  }

  // cria um objeto (parecido com um dicionário do Python)
  let pessoa = { nome: nome, email: email };
  pessoas.push(pessoa); // push = append do Python
  console.log('Cadastrado com sucesso!');
}

function listar() {
  if (pessoas.length === 0) {
    console.log('Ninguém cadastrado ainda.');
    return;
  }
  for (let i = 0; i < pessoas.length; i++) {
    console.log(i + 1 + ' - ' + pessoas[i].nome + ' (' + pessoas[i].email + ')');
  }
}

function excluir() {
  listar();
  if (pessoas.length === 0) return;

  let numero = Number(input('Número da pessoa para excluir: '));
  if (numero < 1 || numero > pessoas.length || isNaN(numero)) {
    console.log('Número inválido!');
    return;
  }
  pessoas.splice(numero - 1, 1); // splice remove um item da lista
  console.log('Excluído!');
}

// Programa principal (igual ao while True do Python)
let opcao = '';
while (opcao !== '0') {
  console.log('\n--- MENU ---');
  console.log('1 - Cadastrar');
  console.log('2 - Listar');
  console.log('3 - Excluir');
  console.log('0 - Sair');
  opcao = input('Escolha: ');

  if (opcao === '1') {
    cadastrar();
  } else if (opcao === '2') {
    listar();
  } else if (opcao === '3') {
    excluir();
  } else if (opcao !== '0') {
    console.log('Opção inválida!');
  }
}
console.log('Até logo!');