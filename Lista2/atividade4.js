//Escreva um algoritmo em Java, que leia 3 palavras (String), que definem as características de um tipo de animal possível segundo o diagrama abaixo, que deve ser lido da esquerda para a direita.

const leia = require('readline-sync');

let palavra1, palavra2, palavra3;

palavra1 = leia.question("\nDigite a caracteristica 1: ");
palavra2 = leia.question("\nDigite a caracteristica 2: ");
palavra3 = leia.question("\nDigite a caracteristica 3: ");

if( palavra1 === 'vertebrado' ){
    if( palavra2 === 'ave'){
        if(palavra3 === 'carnivoro'){
            console.log("\nAguia");
        }else if( palavra3 === 'onivoro'){
            console.log("\nPomba");
        }
    }else if( palavra2 === 'mamifero'){
        if(palavra3 === 'onivoro'){
            console.log("\nHomem");
        }else if( palavra3 === 'herbivoro'){
            console.log("\nVaca");
        }
    }
}else if( palavra1 === 'invertebrado'){
    if( palavra2 === 'Inseto'){
        if(palavra3 === 'hematofago'){
            console.log("\nPulga");
        }else if( palavra3 === 'herbivoro'){
            console.log("\nLagarta");
        }
    }else if( palavra2 === 'anelideo'){
        if( palavra3 === 'hematofago'){
            console.log("\nSanguessuga");
        }else if( palavra3 === 'onivoro'){
            console.log("\nMinhoca");
        }
    }
}else{
    console.log("\nAs caracteristicas informadas nao sao suficientes");
}
