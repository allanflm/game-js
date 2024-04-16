alert("Bem vindo ao jogo do numero secreto!")

let numeroSecreto = 8;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute for diferente de numeroSecreto;
while (chute != numeroSecreto) {

    chute = prompt("Digite um numero entre 1 a 10");
    // se o chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        alert(`Voce acertou o numero secreto! -> ${numeroSecreto} com ${tentativas} tentativas.`);
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