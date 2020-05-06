import{Cliente} from "./Cliente.js";
import{ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente();

    cliente1.nome = "Jorge";
    cliente1.cpf  = 11122233309;
    

const cliente2 = new Cliente();

    cliente2.nome = "Aline";
    cliente2.cpf  = 44455566609;
    

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente =  cliente1;
contaCorrenteRicardo.depositar(500);
console.log(contaCorrenteRicardo);


const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;

let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);
console.log("Valor: "+valor)

console.log(conta2);




