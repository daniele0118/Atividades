const leia = require('readline-sync');

let vetor = new Array(10), encontra, indice;

for( indice = 0; indice < vetor.length; indice++){
    vetor[indice] = leia.questionInt(`\nDigite o numero ${indice+1} do vetor: `);
}

indice = 0;

encontra = leia.questionInt("\nDigite o numero que deseja encontrar: ");

for( indice = 0 ; indice < vetor.length ; indice++ ){
    if( encontra == vetor[indice]){
        console.log(`\nO numero esta na posicao ${indice+1}`);
    }else{
        console.log("\nO numero nao foi encontrado!");
    }
}