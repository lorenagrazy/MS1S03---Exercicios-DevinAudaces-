
const entradaNome = document.getElementById('nome');
const botaoAcao = document.getElementById('acao');
const pMensagem = document.getElementById('mensagem');

const mensagemOla = nome => `Olá, ${nome}!`;

const resultado = mensagemOla("Mariana");
console.log(resultado);

botaoAcao.addEventListener('click', () => {
  pMensagem.innerHTML = mensagemOla(entradaNome.value);
});