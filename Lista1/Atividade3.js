const leia = require('readline-sync');
let bruto, noturno, extras, descontos;

bruto = leia.questionFloat("\nInsira o salario bruto: ", {limitMessage: '\nDigite um valor de numero real'});
noturno = leia.questionFloat("\nInsira o adicional noturno: ", {limitMessage: '\nDigite um valor de numero real'});
extras = leia.questionFloat("\nInsira as horas extras: ", {limitMessage: '\nDigite um valor de numero real'});
descontos = leia.questionFloat("\nInsira os descontos: ", {limitMessage: '\nDigite um valor de numero real'});

let liquido = (bruto + noturno + (extras * 5) - descontos);
console.log("\nO valor do salario liquido é: "+ liquido);