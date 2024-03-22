// Escreva um algoritmo, que leia números inteiros via teclado, até que o número zero seja digitado. Ao final, mostre na tela a soma de todos os números digitados, que sejam positivos.
const leia = require('readline-sync');

let soma = 0, num;

do{
    num = leia.questionInt("\nDigite um numero: ");
    if( num > 0)
        soma += num;

}while(num != 0)

console.log(`\nA soma dos numeros positivos e ${soma}`);

