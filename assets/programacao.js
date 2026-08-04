// ======================================
// PORTFÓLIO - JavaScript
// Arquivo: programacao.js
// ======================================

// Atualiza automaticamente o ano do rodapé
const ano = document.getElementById("ano");

if (ano) {
    ano.textContent = new Date().getFullYear();
}

// ======================================
// Rolagem suave do menu
// ======================================

const linksMenu = document.querySelectorAll('nav a');

linksMenu.forEach(link => {

    link.addEventListener('click', function (e) {

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute('href'));

        if (destino) {
            destino.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

// ======================================
// Destacar item do menu conforme a seção
// ======================================

const secoes = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let atual = "";

    secoes.forEach(secao => {

        const topo = secao.offsetTop - 120;
        const altura = secao.offsetHeight;

        if (window.scrollY >= topo &&
            window.scrollY < topo + altura) {

            atual = secao.getAttribute("id");

        }

    });

    linksMenu.forEach(link => {

        link.classList.remove("ativo");

        if (link.getAttribute("href") === "#" + atual) {
            link.classList.add("ativo");
        }

    });

});

// ======================================
// Animação ao aparecer na tela
// ======================================

const elementos = document.querySelectorAll("section, .card");

const observador = new IntersectionObserver((entradas) => {

    entradas.forEach(entrada => {

        if (entrada.isIntersecting) {

            entrada.target.classList.add("mostrar");

        }

    });

}, {
    threshold: 0.2
});

elementos.forEach(elemento => {
    observador.observe(elemento);
});

// ======================================
// Efeito de clique nos cards
// ======================================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        card.classList.add("clicado");

        setTimeout(() => {
            card.classList.remove("clicado");
        }, 250);

    });

});

// ======================================
// Mensagem ao clicar em links vazios
// ======================================

const links = document.querySelectorAll('a[href="#"]');

links.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        alert("Adicione seu link do GitHub ou LinkedIn futuramente.");

    });

});

console.log("Portfólio carregado com sucesso!");