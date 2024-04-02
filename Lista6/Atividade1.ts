import { Queue } from './Queue';
const leia = require('readline-sync');


let opcao: number;
let nome: string;

const fila = new Queue<string>();

do{

    console.log("\n****************************************");
    console.log("1:Adicionar cliente na fila::::::::::๑۩۩๑");
    console.log("2:Listar todos os clientes:::::::::::๑۩۩๑");
    console.log("3:Retirar cliente da fila::::::::::::๑۩۩๑");
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
            fila.enqueue(nome);

            console.log("Fila: ");
            fila.printQueue();
          console.log("Cliente adicionado!");
          break;
        case 2:
          console.log("Lista de clientes na fila: ");
          fila.printQueue();
          break;
        case 3:
          if(fila.isEmpty()){
            console.log("A fila está vazia");
          }else{
            fila.dequeue();
            console.log("Fila:\n ");
            fila.printQueue();
            console.log("O cliente foi chamado!");
          }
          break;
        default:
          console.log("Insira uma opcao válida");
          break;
      }

    }while(opcao != 0);