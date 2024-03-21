//Para doar sangue é necessário ter entre 18 e 69 anos de idade. Pessoas com idade entre 60 e 69 anos, só podem doar se não for a sua primeira doação. Escreva um Algoritmo em Java que obtenha via teclado o nome do doador (String), a idade (inteiro) do doador e se é a primeira doação (boolean). De acordo com as Regras para a doação, mostre na tela se o doador está Apto ou Não Apto para doar sangue
const leia = require('readline-sync');

let nome, idade, doador;

nome = leia.question("\nDigite o nome: ", {limitMessage: '\nDigite um nome valido'});
idade = leia.questionInt("\nDigite a idade: ", {limitMessage: '\nDigite uma idade valida'});
doador = leia.keyInYNStrict("\nJa e doador de sangue: ");

if( idade >= 18 && idade <= 60){
    console.log("\n" + nome + " esta apto para doar sangue!");
}else if( idade > 60 && idade <= 69){
    if(doador){
        console.log("\n" + nome + " esta apto para doar sangue!");
    }else{
        console.log("\n" + nome + " nao esta apto para doar sangue");
    }
}else{
    console.log("\n" + nome + " nao esta apto para doar sangue");
}
