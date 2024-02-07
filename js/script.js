//Ativar links do menu
const links = document.querySelectorAll('.header-menu a');

function ativarLink(link){
    const url = location.href;
    const href = link.href;

     if (url.includes(href)) {
        console.log(href);
        link.classList.toggle('local-atual');
     }
}

links.forEach(ativarLink);

//Ativar itens do orçamento
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);

    if (elemento){
        elemento.checked = true;
    }
}

parametros.forEach(ativarProduto);

//Perguntas Frequentes

const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(event){
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controls);


    resposta.classList.toggle('ativa');
    const ativa = resposta.classList.contains('ativa');
    pergunta.setAttribute('aria-expanded', ativa);
}

function eventosPerguntas(pergunta){
    pergunta.addEventListener('click', ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

//Galeria de Bicicletas
const galeria = document.querySelectorAll('.bicicleta-imagens img');
const galeriaContainer = document.querySelector('.bicicleta-imagens');

function trocarImagem(event){
    const img = event.currentTarget;
    const media = matchMedia('(width >= 1000px)').matches;

    if (media){
        galeriaContainer.prepend(img);
    }
}

function eventosGaleria(img){
    img.addEventListener('click', trocarImagem);
}

galeria.forEach(eventosGaleria);

//Plugin

if (window.SimpleAnime) {
    new SimpleAnime();
}
