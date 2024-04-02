import { Stack } from "./Stack";
const leia = require('readline-sync');


let opcao: number;
let nome: string;

const pilha = new Stack<string>();

do{

    console.log("\n****************************************");
    console.log("1:Adicionar livro na pilha:::::::::::๑۩۩๑");
    console.log("2:Listar todos os livros:::::::::::::๑۩۩๑");
    console.log("3:Retirar livro da pilha:::::::::::::๑۩۩๑");
    console.log("0:Sair:::::::::::::::::::::::::::::::๑۩۩๑");
    console.log("******************************************");
    console.log("\n Entre com a opção desejada!");

    opcao = leia.questionInt("");

    if( opcao == 0 ){
        process.exit(0)
    }

    switch (opcao) {
        case 0:
            console.log("Programa finalizado!");
            break;
        case 1:
            nome = leia.question("\nDigite o nome: ");
            pilha.push(nome);

            console.log("Pilha: ");
            pilha.printStack();
          console.log("Livro adicionado!");
          break;
        case 2:
          console.log("Lista de livros na pilha: ");
          pilha.printStack();
          break;
        case 3:
          if(pilha.isEmpty()){
            console.log("A pilha está vazia!");
          }else{
            pilha.pop();
            console.log("Pilha:\n ");
            pilha.printStack();
            console.log("Um Livro foi retirado da pilha!");
          }
          break;
        default:
          console.log("Insira uma opcao válida");
          break;
      }

    }while(opcao != 0);