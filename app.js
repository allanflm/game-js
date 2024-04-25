let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


let paragrafo = document.querySelector('p');
paragrafo.innerHTML = "Escolha um numero de 1 a 10.";

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirMensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do numero secreto.");
    exibirTextoNaTela("p", "Escolha um numero entre 1 a 10.");

}
exibirMensagemInicial();


function verificarChute() {
    let chute = document.querySelector("input").value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", "ACERTOU!!");
        let palavraTentativa = tentativas > 1 ? "tentivas" : "tentativa";
        let mensagemTentativas = `Voce descobriu com o numero secreto com ${tentativas} ${palavraTentativa}.`;
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");

    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela("p", "O numero secreto é menor!");
        } else {
            exibirTextoNaTela("p", "O numero secrete é maior!");
        }
        tentativas++;
        limparCampo();
    }

}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);

}