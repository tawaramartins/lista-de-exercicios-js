// Lista 2 - Estruturas de decisão: Se/Senão

// Leia um número inteiro e informe se este número é par ou ímpar.
let n = parseInt(prompt("Digite um numero"));
if ((n % 2) == 0 ){
    console.log(n + " é par");
} else {
    console.log(n + " é impar");
}
// Leia a idade de uma pessoa e informe se ela já chegou à maioridade. Se ela ainda não chegou, informe quantos anos faltam para a maioridade.


// Construa um algoritmo que leia um número inteiro A e um número inteiro B. Verifique qual dos dois números é maior e o escreva.
let a = parseInt(prompt("Digite um numero"));
let b = parseInt(prompt("Digite um outro numero"));
if (a > b) {
    console.log(a + " e maior!");
} else if (b > a) {
    console.log(b + " e maior!");
}

// Considerando uma pista em que a velocidade máxima permitida é de 110 km/h, leia a velocidade de um veículo e informe se ele excedeu ou não a velocidade máxima permitida.
let velocidade_maxima = 110;
let velocidade_veiculo = Number(prompt("Qual a velocidade do veiculo? "));
if (velocidade_veiculo >= velocidade_maxima) {
    console.log("excedeu");
} else {
    //console.log("Nao excedeu");
}

// Considerando que a temperatura média ideal do corpo humano varia entre 36° C e 36,7° C, elabore um algoritmo que, dada uma temperatura lida, informe se esta pessoa está com febre.
let temperatura = Number(prompt("Digite a sua temperatura."));
let temperatura_ideal = 36 && 36.7
if (temperatura <= temperatura_ideal) {
    console.log("Saudavel");
} else {
    console.log("Febre");
}

// Complemente o algoritmo anterior, adicionando a ele a capacidade de informar se a pessoa está com hipotermia (abaixo da temperatura média ideal); dentro da temperatura média ideal ou com febre.

let temperatura = Number(prompt("Digite aqui a sua temperatura."));
if (temperatura >= 36 && temperatura <= 36.7) {
    console.log("Saudavel");
} else if (temperatura > 36.7) {
    //console.log("Febre");
} else if (temperatura < 36) {
    console.log("Hipotermia");
}
// Elabore um algoritmo que leia um número inteiro e informe se este número é um múltiplo de 7.


// Leia um número inteiro e informe se este número é par e também divisível por 3.

// Para auxiliar um cliente a escolher o produto mais barato em um conjunto de 3 produtos, crie um programa que leia os preços de 3 produtos e informe qual deles é o mais barato.