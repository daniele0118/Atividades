//O programa deverá ler o tipo de operação a ser realizada com base na tabela abaixo (número inteiro entre 1 e 3) e o valor a ser depositado ou sacado (somente nas opções 2 e 3). Considere que um saque só pode ser realizado caso haja saldo suficiente. Ao final de cada operação, exiba o novo Saldo na tela. A variável saldo (float), será inicializada com o valor de R$ 1000.00. Caso a operação seja diferente do intervalo 1 a 3, mostre a mensagem Operação Inválida!
const leia = require('readline-sync');

let valor, codigo;
let saldo = 1000.00

console.log("\nCod.  Operacao");
console.log("\n 1 -- Saldo");
console.log("\n 2 -- Saque");
console.log("\n 3 -- Deposito ");

codigo = leia.questionInt("\nDigite o codigo da operacao: ");


switch (codigo) {
    case 1:
        console.log("\nSaldo:" + saldo );
        break;
    case 2:
        valor = leia.questionFloat("\nDigite o valor do saque: ");
        if( valor > saldo){
            console.log("\nSaldo insuficiente!");
        }else{
            console.log("\nNovo saldo:" + (saldo - valor));
        }
        break;
    case 3:
        valor = leia.questionFloat("\nDigite o valor do deposito: ");
        console.log("\nNovo saldo:" + (saldo + valor));
        break;
    default:
        console.log("\nOperacao invalida!");
}
