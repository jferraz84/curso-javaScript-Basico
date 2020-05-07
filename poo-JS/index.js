import {Gerente} from "./Funcionario/Gerente.js";
import {Diretor} from "./Funcionario/Diretor.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js";
/*import{Cliente} from "./Cliente.js";
import{ContaCorrente} from "./Conta/ContaCorrente.js";
import {ContaPoupanca} from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";

const cliente1 = new Cliente("Jorge", 11122233309);   

const contaPoupanca = new ContaPoupanca(150, cliente1, 1001);
const contaCorrenteJorge = new ContaCorrente(cliente1, 1001);
const contaSalario = new ContaSalario(cliente1);

contaSalario.depositar(3500);
contaSalario.sacar(100);

console.log(contaSalario);*/

const diretor = new Diretor("Jorge", 10000, 11122233310);
diretor.cadastrarSenha("135792");
const gerente = new Gerente("Aline", 5000, 44455566620);
gerente.cadastrarSenha("246813")

const dirEstaLogado = SistemaAutenticacao.login(diretor, "135792");
const gerEstaLogado = SistemaAutenticacao.login(gerente, "246813");


console.log(dirEstaLogado, gerEstaLogado);
