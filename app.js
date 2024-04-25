let numeroSecreto = gerarNumeroAleatorio();

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = "Escolha um numero de 1 a 10.";

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela("h1", "Jogo do numero secreto.");
exibirTextoNaTela("p", "Escolha um numero entre 1 a 10.")


function verificarChute() {
    let chute = document.querySelector("input").value;
    console.log(chute == numeroSecreto);
    console.log(numeroSecreto);
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}