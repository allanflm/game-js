alert("Bem vindo ao jogo do numero secreto!")

let numeroSecreto = 8;
console.log(numeroSecreto)
let chute = prompt("Digite um numero entre 1 a 10");

// se o chute for igual ao numero secreto
if (chute == numeroSecreto) {
    alert(`Voce acertou o numero secreto! -> ${numeroSecreto} `)
} else {
    alert("Você errou!")
}