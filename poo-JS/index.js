import{Cliente} from "./Cliente.js";
import{ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import{Conta} from "./Conta.js";

const cliente1 = new Cliente("Jorge", 11122233309);   

const contaCorrenteJorge = new Conta(0, cliente1, 1001);
contaCorrenteJorge.depositar(500);
contaCorrenteJorge.sacar(100);

const contaPoupanca = new Conta(150, cliente1, 1001);

console.log(contaPoupanca);
console.log(contaCorrenteJorge);


