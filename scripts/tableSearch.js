const pesquisar = document.querySelector('.searchLabel input');
const linhasTabela = document.querySelectorAll('tbody tr');
const cabecalhoTabela = document.querySelectorAll('thead th');

pesquisar.addEventListener('input', pesquisarTabela);

function pesquisarTabela() {
  const buscarTabela = pesquisar.value.toLowerCase(); 

  linhasTabela.forEach((linha, i) => {
  const informacaoTabela = linha.textContent.toLowerCase(); 

  linha.classList.toggle('hide', informacaoTabela.indexOf(buscarTabela) < 0);

  linha.style.setProperty('--delay', i / 25 + 's');
  });

  const linhasVisiveis = document.querySelectorAll('tbody tr:not(.hide)');
}