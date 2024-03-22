// Escreva um algoritmo, que leia números inteiros via teclado, até que o número zero seja digitado. Ao final, mostre na tela a média de todos os números digitados, que sejam múltiplos de 3.
const leia = require('readline-sync');

let soma = 0, count = -1, num ;

do{
    num = leia.questionInt("\nDigite um numero: ");
    if( num % 3 === 0){
        soma += num;
        count++;
    }

}while(num != 0)

console.log("\nA média de todos os números multiplos de 3 e: " + soma / count);
