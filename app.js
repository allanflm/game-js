// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript

alert("Bem vindo ao jogo do numero secreto!")
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1)
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute for diferente de numeroSecreto;
while (chute != numeroSecreto) {

    chute = prompt(`Digite um numero entre 1 a ${numeroMaximo}`);
    // se o chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O numero secreto é menor que ${chute}`);
        }
        else {
            alert(`O numero secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}
// operador ternario
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

alert(`Voce acertou o numero secreto! -> ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

// if (tentativas > 1) {
//     alert(`Voce acertou o numero secreto! -> ${numeroSecreto} com ${tentativas} tentativas.`);
// }
// else {
//     alert(`Voce acertou o numero secreto! -> ${numeroSecreto} com ${tentativas} tentativa.`);
// }