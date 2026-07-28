// Banco de dados interno do site
const filmes = [
    { titulo: "Mad Max: Estrada da Fúria", genero: "action", img: "https://ingresso-a.akamaihd.net/img/cinema/cartaz/9152-cartaz.jpg", desc: "Um guerreiro da estrada é capturado por rebeldes e se envolve em uma fuga em massa." },
    { titulo: "Superbad: É Hoje", genero: "comedy", img: "https://m.media-amazon.com/images/I/51HShnByGEL._AC_UF894,1000_QL80_.jpg", desc: "Dois estudantes do ensino médio enfrentam problemas para conseguir bebidas para uma festa." },
    { titulo: "Interestelar", genero: "scifi", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp3W2rxd1dRfBkuGIvfoTox1tIgHYmJ57rUWiIjAVGhAhXPvvdBdIgz3fT&s=10", desc: "Um grupo de astronautas viaja através de um buraco de minhoca em busca de uma nova casa." },
    { titulo: "John Wick", genero: "action", img: "https://br.web.img3.acsta.net/pictures/17/01/10/15/05/404753.jpg", desc: "Um ex-assassino sai da aposentadoria para rastrear os gângsteres que tiraram tudo dele." },
    { titulo: "As Branquelas", genero: "comedy", img: "https://upload.wikimedia.org/wikipedia/pt/d/de/White_chicks.jpeg", desc: "Dois agentes do FBI se passam por herdeiras ricas para resolver um caso de sequestro." },
    { titulo: "Blade Runner 2049", genero: "scifi", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBhmvkKvhLTxd3__TrzKCSkgRGxxLs17IT5Q_FUMCMDKPU8vmngpxRm4Ya&s=10", desc: "Um novo blade runner descobre um segredo enterrado que pode mergulhar a sociedade no caos." }
];

// Mostra os filmes baseados no gênero selecionado
function recomendarFilmes() {
    const generoSelecionado = document.getElementById('genre').value;
    const resultadosDiv = document.getElementById('results');
    resultadosDiv.innerHTML = '';

    const filmesFiltrados = filmes.filter(filme => {
        return generoSelecionado === 'all' || filme.genero === generoSelecionado;
    });

    if (filmesFiltrados.length === 0) {
        resultadosDiv.innerHTML = '<p>Nenhum filme encontrado para este gênero.</p>';
        return;
    }

    filmesFiltrados.forEach(filme => {
        const card = document.createElement('div');
        card.classList.add('movie-card');
        card.innerHTML = `
            <img src="${filme.img}" alt="${filme.titulo}">
            <div class="movie-info">
                <div class="movie-title">${filme.titulo}</div>
                <div class="movie-desc">${filme.desc}</div>
            </div>
        `;
        resultadosDiv.appendChild(card);
    });
}

// Sorteia um único filme (dentro do gênero que estiver selecionado)
function filmeAleatorio() {
    const generoSelecionado = document.getElementById('genre').value;
    const resultadosDiv = document.getElementById('results');
    resultadosDiv.innerHTML = '';

    const filmesFiltrados = filmes.filter(filme => {
        return generoSelecionado === 'all' || filme.genero === generoSelecionado;
    });

    if (filmesFiltrados.length === 0) {
        resultadosDiv.innerHTML = '<p>Nenhum filme disponível para sortear neste gênero.</p>';
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * filmesFiltrados.length);
    const filmeSorteado = filmesFiltrados[indiceAleatorio];

    const card = document.createElement('div');
    card.classList.add('movie-card', 'featured-card');
    card.innerHTML = `
        <div class="badge-sorteio">🎲 Escolha do Destino</div>
        <img src="${filmeSorteado.img}" alt="${filmeSorteado.titulo}">
        <div class="movie-info">
            <div class="movie-title">${filmeSorteado.titulo}</div>
            <div class="movie-desc">${filmeSorteado.desc}</div>
        </div>
    `;
    resultadosDiv.appendChild(card);
}

// Executa a listagem inicial assim que a página abre
window.onload = recomendarFilmes;
