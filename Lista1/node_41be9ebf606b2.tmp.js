const leia = require('readline-sync');
let salario;
let abono;

salario = leia.questionFloat("\nInsira o valor do salário: ", {limitMessage: '\nDigite um valor de número real'});
console.log("\nO valor inserido foi "+ salario);
abono = leia.questionFloat("\nInsira o valor do abono: ", {limitMessage: '\nDigite um valor de número real'});
console.log("\nO valor inserido foi "+ abono);

let novoSalario = (salario + abono);

console.log("\nO valor do novo salário é: " + novoSalario);
