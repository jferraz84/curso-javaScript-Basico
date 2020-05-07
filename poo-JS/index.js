import{Cliente} from "./Cliente.js";
import{ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";
import{Conta} from "./Conta.js";
import { ContaSalario } from "./ContaSalario.js";

const cliente1 = new Cliente("Jorge", 11122233309);   

const contaPoupanca = new ContaPoupanca(150, cliente1, 1001);
const contaCorrenteJorge = new ContaCorrente(cliente1, 1001);
const contaSalario = new ContaSalario(cliente1);

contaSalario.depositar(3500);
contaSalario.sacar(100);


//console.log(contaPoupanca);
//console.log(contaCorrenteJorge);

console.log(contaSalario);

