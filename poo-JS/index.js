import{Cliente} from "./Cliente.js";
import{ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Jorge", 11122233309);   
const cliente2 = new Cliente("Aline", 44455566609);

const contaCorrenteRicardo = new ContaCorrente(1001,cliente1);
contaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente(102,cliente2 );
let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);

console.log("Numero de Contas no Banco: " +ContaCorrente.numeroDeContas);
console.log();
console.log(contaCorrenteRicardo);
console.log(conta2);




