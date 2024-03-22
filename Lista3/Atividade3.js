//Escreva um algoritmo, que leia a idade de várias pessoas (números inteiros), via teclado e mostre na tela o total de pessoas cuja idade seja menor que 21 anos e o total de pessoas cuja idade seja maior que 50 anos. A leitura dos dados deve ser finalizada ao digitar uma idade negativa.
const leia = require('readline-sync');

let idade = 0, menor = 0, maior = 0;

while(idade >= 0){
    idade = leia.questionInt("Digite uma idade: ");
    if(idade < 21)
        menor++;
    if(idade > 50)
        maior++;
}

console.log(`Total de pessoas menores de 21 anos: ${menor}`);
console.log(`Total de pessoas maiores que 50 anos: ${maior}`);