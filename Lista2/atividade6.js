//escreva um algoritmo em Java que leia o Nome do Colaborador (String), o Código do Cargo do Colaborador (número inteiro de 1 a 6) e o Salário (número float).
const leia = require('readline-sync');

let nome, codigo, salario;

console.log("\nCod.  Cargo            Reajuste");
console.log("\n 1 -- Gerente       -- 10% ");
console.log("\n 2 -- Vendedor      -- 7% ");
console.log("\n 3 -- Supervisor    -- 9% ");
console.log("\n 4 -- Motorista     -- 6% ");
console.log("\n 5 -- Estoquista    -- 5% ");
console.log("\n 6 -- Técnico de TI -- 8% ");

nome = leia.question("\nDigite o nome do colaborador: ");
codigo = leia.questionInt("\nDigite o codigo: ");
salario = leia.questionFloat("\nDigite o salario: ");

switch (codigo) {
    case 1:
        salario *= 1.1;
        console.log("\nNovo salario: R$ " + salario);
        break;
    case 2:
        salario *= 1.07;
        console.log("\nNovo salario: R$ " + salario);
        break;
    case 3:
        salario *= 1.09;
        console.log("\nNovo salario: R$ " + salario);
        break;
    case 4:
        salario *= 1.06;
        console.log("\nNovo salario: R$ " + salario);
        break;
    case 5:
        salario *= 1.05;
        console.log("\nNovo salario: R$ " + salario);
        break;
    case 6:
        salario *= 1.08;
        console.log("\nNovo salario: R$ " + salario);
        break;
    default:
        console.log("\nDigite um codigo valido!");
}
