//Faça um algoritmo em Java que leia 3 valores inteiros A, B e C e imprima na tela se a soma de A + B é maior, menor ou igual a C.
const leia = require('readline-sync');

let A, B, C;

A = leia.questionInt("\nDigite o numero A: ", {limitMessage: '\nDigite um numero inteiro'});
B = leia.questionInt("\nDigite o numero B: ", {limitMessage: '\nDigite um numero inteiro'});
C = leia.questionInt("\nDigite o numero C: ", {limitMessage: '\nDigite um numero inteiro'});

if( (A + B) > C){
    console.log("\nA Soma de A + B e maior do que C");
}else if( (A + B) < C ){
    console.log("\nA Soma de A + B e menor do que C");
}else{
    console.log("\nA Soma de A + B e igual a C");
}

