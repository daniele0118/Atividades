const leia = require('readline-sync');

let matriz = new Array(3);

let diagonalPrincipal = "", diagonalSecundaria = "";
let somaDiagonalPrincipal = 0, somaDiagonalSecundaria = 0;


for(let indiceLinha = 0; indiceLinha < matriz.length; indiceLinha++){
    for(let indiceColuna = 0; indiceColuna < matriz.length; indiceColuna++){
        matriz[indiceLinha][indiceColuna] = leia.questionInt("Digite um numero inteiro: ");
    }
    
}

for(let indice = 0; indice < matriz.length; indice++){
    diagonalPrincipal += matriz[indice][indice] + " ";

}

console.log(`Elementos da Diagonal Principal: ${diagonalPrincipal}`)