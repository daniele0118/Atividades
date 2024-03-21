//Escreva um algoritmo em Java, que leia um número inteiro via teclado e mostre na tela uma mensagem indicando se este número é par ou ímpar e se o número é positivo ou negativo.
const leia = require('readline-sync');

let num;

num = leia.questionInt("\nDigite o numero: ", {limitMessage: '\nDigite um numero inteiro'});

if(num % 2 == 0 ){
    console.log("\nO numero "+num+" e par");
}else{
    console.log("\nO numero "+num+" e impar");
}

if(num > 0 ){
    console.log("\nO numero "+num+" e positivo");
}else if(num < 0){
    console.log("\nO numero "+num+" e negativo");
}else{
    console.log("\nO numero "+num+" e zero");
}

