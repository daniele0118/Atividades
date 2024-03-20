const leia = require('readline-sync');
let nota1;
let nota2;
let nota3;
let nota4;

nota1 = leia.questionFloat("\nInsira a nota1: ", {limitMessage: '\nDigite um valor de número real'});
nota2 = leia.questionFloat("\nInsira a nota2: ", {limitMessage: '\nDigite um valor de número real'});
nota3 = leia.questionFloat("\nInsira a nota3: ", {limitMessage: '\nDigite um valor de número real'});
nota4 = leia.questionFloat("\nInsira a nota4: ", {limitMessage: '\nDigite um valor de número real'});

let media = (nota1+nota2+nota3+nota4) / 4;
console.log("\nO valor da média é: "+ media);