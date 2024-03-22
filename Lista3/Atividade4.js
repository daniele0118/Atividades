// Uma empresa desenvolveu uma pesquisa interna para conhecer os colaboradores da área de Desenvolvimento e precisam de um sistema para analisar os dados. Escreva um algoritmo, que leia via teclado as seguintes informações de cada colaborador:
const leia = require('readline-sync');

let continua, media = 0, count = 0, idade, genero, dev, op1 = 0, op2 = 0, op3 = 0, op4 = 0;

console.log("\nCodigo - Identidade de genero");
console.log("\n1 - Mulher cis");
console.log("\n2 - Homem cis");
console.log("\n3 - Não Binário");
console.log("\n4 - Mulher trans");
console.log("\n5 - Homem trans");
console.log("\n6 - Outros");
console.log("\n\nCodigo - Pessoa desenvolvedora");
console.log("\n1 - Backend");
console.log("\n2 - Frontend");
console.log("\n3 - Mobile");
console.log("\n4 - Fullstack");

while(continua !== "N"){
    count++;
    idade = leia.questionInt("Insira a idade: ");
    genero = leia.questionInt("Insira o codigo da identidade de genero: ");
    dev = leia.questionInt("Insira o codigo de developer: ");

    if( dev == 1)
        op1++;
    if((genero == 1 || genero == 4) && dev == 2)
        op2++;
    if((genero == 2 || genero == 5) && dev == 4 && idade > 40)
        op3++;
    if(genero == 3 && dev == 4 && idade < 30)
        op4++

    media += idade;

    continua = leia.question("\nDeseja continuar a leitura dos dados de um novo colaborador? (S/N):  ").toUpperCase();

}

console.log("\nTotal de pessoas desenvolvedoras Backend: "+op1);
console.log("\nTotal de Mulheres Cis e Trans desenvolvedoras Frontend: "+op2);
console.log("\nTotal de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: "+op3);
console.log("\nTotal de Não Binários desenvolvedores FullStack menores de 30 anos: "+op4);
console.log("\nTotal de pessoas que responderam a pesquisa: "+count);
console.log("\nA média de idade das pessoas que responderam à pesquisa: "+ (media/count));



