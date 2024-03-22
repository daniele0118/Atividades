//Escreva um algoritmo, que leia 2 números inteiros via teclado, onde o primeiro número deve ser menor do que o segundo número. Caso contrário, deve ser exibida uma mensagem na tela informando que o intervalo é inválido e sair do programa. 
// No intervalo informado, mostre na tela todos os números que são múltiplos de 3 e 5.
const leia = require('readline-sync');

let num, num2;

num = leia.questionInt("\nInsira o primeiro numero: ");
num2 = leia.questionInt("\nInsira o ultimo numero: ");

if(num < num2){
    for( num ; num <= num2 ; num++ ){
        if( num % 3 == 0 && num % 5 == 0){
            console.log(`${num} e multiplo de 3 e 5`);
        }
    }
}



