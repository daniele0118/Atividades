const leia = require('readline-sync');
let numero1;
let numero2;
let numero3;
let numero4;

numero1 = leia.questionFloat("\nInsira o numero1: ", {limitMessage: '\nDigite um valor de numero real'});
numero2 = leia.questionFloat("\nInsira o numero2: ", {limitMessage: '\nDigite um valor de numero real'});
numero3 = leia.questionFloat("\nInsira o numero3: ", {limitMessage: '\nDigite um valor de numero real'});
numero4 = leia.questionFloat("\nInsira o numero4: ", {limitMessage: '\nDigite um valor de numero real'});

let diferenca = (numero1 * numero2) - (numero3 * numero4);
console.log("\nO valor da diferenca é: "+ diferenca);