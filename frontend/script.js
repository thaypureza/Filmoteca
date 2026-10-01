const botaoPerfil = document.getElementById("botaoPerfil");
const menuPerfil = document.getElementById("menuPerfil");

const tela = document.getElementById("tela");
const tituloTela = document.getElementById("tituloTela");
const conteudoTela = document.getElementById("conteudoTela");

botaoPerfil.addEventListener("click", function(event) {
    event.stopPropagation();
    menuPerfil.classList.toggle("aberto");
});

document.addEventListener("click", function(event) {
    if (!menuPerfil.contains(event.target) && !botaoPerfil.contains(event.target)) {
        menuPerfil.classList.remove("aberto");
    }
});

function abrirAvaliacoes() {
    menuPerfil.classList.remove("aberto");

    tituloTela.textContent = "⭐ Minhas avaliações";

    conteudoTela.innerHTML = `
        <div class="item">
            <strong>Filme 01</strong>
            <p>★★★★★</p>
            <p>Muito bom! Gostei bastante do filme.</p>
        </div>

        <div class="item">
            <strong>Filme 02</strong>
            <p>★★★★☆</p>
            <p>Um filme muito divertido.</p>
        </div>

        <div class="item">
            <strong>Filme 03</strong>
            <p>★★★★★</p>
            <p>Excelente filme.</p>
        </div>
    `;

    tela.classList.add("aberta");
}

function abrirFavoritos() {
    menuPerfil.classList.remove("aberto");

    tituloTela.textContent = "❤️ Filmes favoritos";

    conteudoTela.innerHTML = `
        <div class="item">
            <strong>Filme 01</strong>
            <p>Drama • 2025</p>
        </div>

        <div class="item">
            <strong>Filme 03</strong>
            <p>Ação • 2025</p>
        </div>

        <div class="item">
            <strong>Filme 05</strong>
            <p>Comédia • 2024</p>
        </div>
    `;

    tela.classList.add("aberta");
}

function fecharTela() {
    tela.classList.remove("aberta");
}

function sair() {
    window.location.href = "index1.html";
}

tela.addEventListener("click", function(event) {
    if (event.target === tela) {
        fecharTela();
    }
});