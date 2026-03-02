'use Strict'
//ajuda a evitar erros silenciosos

// Lista de imagens que queremos mostrar na tela
const imagens = [
  {'legenda':'imagem1','url':'./img/download (1).jfif'},
  { 'legenda':'imagem2','url':'./img/download (2).jfif'},
   {'legenda':'imagem3','url':'./img/download (5).jfif'},
  {'legenda':'imagem4','url':'./img/download (6).jfif'},
  { 'legenda':'imagem5','url':'./img/download (7).jfif'},
   {'legenda':'imagem6','url':'./img/download (9).jfif'}
]


function criarimagem (imagens){
    // Função que cria UMA imagem com legenda e coloca na tela

const galeria = document.getElementById ('galeria')
// Procura no HTML o elemento onde a galeria será exibida

const img = document.createElement('img')
 // Cria a tag <img>

const figCaption = document.createElement('figCaption')
 // Cria a tag <figcaption> (legenda)

figCaption.textContent = imagens.legenda
// Coloca o texto da legenda

img.src = imagens.url
 // Define qual imagem será mostrada

const figure = document.createElement('figure');
// Cria a tag <figure> que agrupa imagem + legenda
figure.appendChild(img)
 // Coloca a imagem dentro do figure
figure.appendChild(figCaption)
 // Coloca a legenda dentro do figure
galeria.appendChild(figure)
// Coloca tudo dentro da galeria no HTML
}

function carregarImagens (){
    // Função que percorre toda a lista de imagens

imagens.forEach(criarimagem)
// Para cada item do array "imagens",
  // chama a função criarimagem
}
carregarImagens()


/*criou uma lista de fotos
 O código pega uma por uma
 Cria a imagem
 Cria a legenda
 Junta tudo
 Mostra na tela */
