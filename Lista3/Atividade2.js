// Escreva um algoritmo, que leia 10 números inteiros via teclado e mostre na tela quantos números são pares e quantos número são ímpares.
const leia = require('readline-sync');

let num, par = 0, impar = 0;

for( cont = 1 ; cont <=10 ; cont++){
    num = leia.questionInt(`Digite o ${cont} numero: `);
    if(num % 2 == 0)
        par++;
    if(num % 2 == 1)
        impar++;
    
}

console.log("Total de numeros pares: "+par);
console.log("Total de numeros impares: "+impar);