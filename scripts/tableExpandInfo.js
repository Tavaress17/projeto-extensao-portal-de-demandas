// Obter todos os itens da tabela
const items = document.querySelectorAll('.item');

// Adicionar um event listener de clique em cada item
items.forEach(item => {
    item.addEventListener('click', () => {
    // Encontrar o próximo elemento irmão com a classe 'detalhes'
    const detalhes = item.nextElementSibling;

    // Verificar se o elemento de detalhes existe
    if (detalhes && detalhes.classList.contains('detalhes')) {
      // Alternar a classe 'mostrarDetalhes' no elemento de detalhes
        detalhes.classList.toggle('mostrarDetalhes');
        item.classList.toggle('itemSelecionado');
    }
    });
});
