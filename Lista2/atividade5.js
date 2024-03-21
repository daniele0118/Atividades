//Com base na tabela abaixo, escreva um algoritmo em Java que leia o código de um item (número inteiro de 1 a 6) e a quantidade comprada deste item (número inteiro).
const leia = require('readline-sync');

let codigo, qtd, novo;

console.log("\nCod. Produto             Preco  ");
console.log("\n 1 -- Cachorro Quente -- R$ 10,00 ");
console.log("\n 2 -- X-Salada        -- R$ 15,00 ");
console.log("\n 3 -- X-Bacon         -- R$ 18,00 ");
console.log("\n 4 -- Bauru           -- R$ 18,00 ");
console.log("\n 5 -- Refrigerante    -- R$ 8,00 ");
console.log("\n 6 -- Suco de laranja -- R$ 13,00 ");

codigo = leia.questionInt("\nDigite o codigo do produto: ");
qtd = leia.questionInt("\nDigite a quantidade: ");

switch (codigo) {
    case 1:
        novo = 10 * qtd;
        console.log("\nProduto: Cachorro Quente\nValor novo: R$ " + novo);
        break;
    case 2:
        novo = 15 * qtd;
        console.log("\nProduto: X-Salada\nValor novo: R$ " + novo);
        break;
    case 3:
        novo = 18 * qtd;
        console.log("\nProduto: X-Bacon\nValor novo: R$ " + novo);
        break;
    case 4:
        novo = 18 * qtd;
        console.log("\nProduto: Bauru\nValor novo: R$ " + novo);
        break;
    case 5:
        novo = 8 * qtd;
        console.log("\nProduto: Refrigerante\nValor novo: R$ " + novo);
        break;
    case 6:
        novo = 13 * qtd;
        console.log("\nProduto: Suco de laranja\nValor novo: R$ " + novo);
        break;
    default:
        console.log("\nDigite um codigo valido!");
}
