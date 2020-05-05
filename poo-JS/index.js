class Cliente {

    _nome;
    _cpf;

}

class ContaCorrente {
    
    _agencia;
    _saldo;

    sacar(valor) {

        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
            
        } else {
            console.log("Saque não REALIZADO, Saldo insuficiente")
        }
        
    }

    depositar(valor){

        if (valor <= 0 ) return;
            this._saldo += valor;

    }
}

const cliente1 = new Cliente();

    cliente1.nome = "Jorge";
    cliente1.cpf  = 11122233309;
    

const cliente2 = new Cliente();

    cliente2.nome = "Aline";
    cliente2.cpf  = 44455566609;
    

const contaCorrenteRicardo = new ContaCorrente();

contaCorrenteRicardo._saldo = 0;
contaCorrenteRicardo._agencia = 1001;
contaCorrenteRicardo.depositar(200);
const valorSacado = contaCorrenteRicardo.sacar(150);

console.log(valorSacado);
console.log(contaCorrenteRicardo);



