import{Cliente} from "./Cliente.js";
import{ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Jorge", 11122233309);   

const contaPoupanca = new ContaPoupanca(150, cliente1, 1001);

const contaCorrenteJorge = new ContaCorrente(cliente1, 1001);
contaCorrenteJorge.depositar(500);
contaCorrenteJorge.sacar(100);


console.log(contaPoupanca);
console.log(contaCorrenteJorge);


