const leia = require('readline-sync');

let vetor = new Array(10), indiceImpar = '', pares = '', soma = 0 , media = 0;

for( indice = 0; indice < vetor.length; indice++){
    vetor[indice] = leia.questionInt(`\nDigite o numero ${indice+1} do vetor: `);
}

indice = 0;

for( indice = 0 ; indice < vetor.length ; indice++ ){
    if( indice % 2 !== 0){
        indiceImpar += `${vetor[indice]} | `;
    }
    if( vetor[indice] % 2 == 0){
        pares += `${vetor[indice]} | `;
    }
    soma += vetor[indice];
}

media = soma / 10;

console.log(`\nIndices impares do vetor ${indiceImpar}`);
console.log(`\nNumeros pares do vetor ${pares}`);
console.log(`\nA soma dos valores do vetor e ${soma}`);
console.log(`\nA media dos valores do vetor e ${media}`);
