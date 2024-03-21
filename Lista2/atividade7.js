//escreva um algoritmo em Java, que simule uma Calculadora simples. O programa deverá ler dois números float: numero1 e numero2, e na sequência ler o Código da operação matemática (número inteiro de 1 a 4). A seguir, mostre na tela o resultado da operação entre os 2 números. Caso a operação seja diferente do intervalo 1 a 4, mostre a mensagem Operação Inválida!
const leia = require('readline-sync');

let num1, num2, codigo;

console.log("\nCod.  Operacao");
console.log("\n 1 -- Soma");
console.log("\n 2 -- Subtracao");
console.log("\n 3 -- Multiplicacao ");
console.log("\n 4 -- Divisao");

num1 = leia.questionFloat("\nDigite o primeiro numero: ");
num2 = leia.questionFloat("\nDigite o segundo numero: ");
codigo = leia.questionFloat("\nDigite o codigo da operacao: ");

switch (codigo) {
    case 1:
        console.log("\n" + num1 + " + " + num2 + " = " + (num1+num2));
        break;
    case 2:
        console.log("\n" + num1 + " - " + num2 + " = " + (num1-num2));
        break;
    case 3:
        console.log("\n" + num1 + " x " + num2 + " = " + (num1*num2));
        break;
    case 4:
        console.log("\n" + num1 + " / " + num2 + " = " + (num1/num2));
        break;
    default:
        console.log("\nOperacao invalida!");
}
