// Números necessarios
const n1 = 80;
const n2 = 30;

// Somas definidas
let soma = n1 + n2;
let sub = n1 - n2;
let div = n1 / n2;
let mult = n1 * n2;

// Texto antes do resultado do calculo
console.log("Resultado da Soma:", soma);
console.log("Resultado da Subtração:", sub);
console.log("Resultado da Multiplicação:", mult);
console.log("Resultado da Divisão:", div);

// Resultado da SOMA 1
if (soma >= 100) {
    console.log("A soma é maior ou igual a 100");
} else {
    console.log("A soma é menor que 100");
}

// Resultado da SOMA 2
if (sub < 20) {
    console.log("A subtração é menor que 20");
} else {
    console.log("A subtração é maior ou igual a 20");
}

// Resultado da SOMA 3
if (mult == 1000) {
    console.log("A soma é igual a 1000");
} else {
    console.log("A soma não é igual a 1000");
}

// Resultado da SOMA 4
if (div <= 2) {
    console.log("A soma é maior ou igual a 2");
} else {
    console.log("A soma é menor que 2");
}