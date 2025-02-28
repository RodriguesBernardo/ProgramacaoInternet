document.addEventListener('DOMContentLoaded', function () {
    function carregarLivros() { 
        fetch('livros.php')
        .then(response => response.json())
        .then(livros => exibirLivros(livros));
    }

    function exibirLivros(livros) {
        const livrosContainer = document.getElementById('livros');
        livrosContainer.innerHTML = '';

        livros.forEach(livro => {
            const divLivro = document.createElement('div');
            divLivro.innerHTML = `<p>Nome: ${livro.nome} - Quantidade: ${livro.quantidade}  </p>`;
            livrosContainer.appendChild(divLivro);
        });
    }

    document.getElementById('btt-all').addEventListener('click', function () {
        carregarLivros();
    });

    document.getElementById('btt-esp').addEventListener('click', function () {
        fetch('livros.php')
            .then(response => response.json())
            .then(livros => {
                const livrosDisponiveis = livros.filter(livro => livro.quantidade > 0);
                exibirLivros(livrosDisponiveis);
            });
    });

    /* carregarLivros(); */
});
