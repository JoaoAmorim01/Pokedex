/* Objetivo: Quando apertar no botão do lado direito do header, trocar a imagem e a cor do site. Ou seja vamos adicionar ou remover a classe modo escuro ao body e mudar a imagem para lua

Passo 1: Pegar no JS o elemento HTML correspondente ao botão para trocar o tema*/
const botaoTema = document.getElementById("botao-tema");

// Passo 2: Pegar no JS o elemento HTML correspondente ao body
const body = document.querySelector("body");
const pokecard = document.querySelectorAll("li")

const imagemBotaoTrocaTema = document.querySelector(".img-button");

// Passo 3: Identificar o cloque do usuário no botão de troca de tema
botaoTema.addEventListener ("click", () => {
    // Passo 4: Adicionar a classe modo-escuro no body
    const modoEscuroAtivo = body.classList.contains("modo-escuro");
    
    body.classList.toggle("modo-escuro");


    // Passo 5: Trocar a imagem do botão de alterar tema para lua

/* Objetivo 2: Quando clicar no botão de troca de toma, se o body já tiver a classe modo-escuro, remover a classe para mudar para o modo claro e mudar a imagem pro sol */
    if (modoEscuroAtivo) {
// Passo 1: Remover a classe do modo-escuro do body
        imagemBotaoTrocaTema.setAttribute("src", "./src/img/imagens/sun.png");
    } else {
// Passo 2: Trocar a imagem do botão de alterar tema pra sol
        imagemBotaoTrocaTema.setAttribute("src", "./src/img/imagens/moon.png");
}});
