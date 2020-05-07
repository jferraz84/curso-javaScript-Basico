// Classe abastrata , não pode ser einstanciada e sim herdada
export  class Conta {

    constructor(saldoInicial, cliente, agencia){

        if (this.constructor == Conta) {
            throw new Error("Não deveria ser instaciado um tipo 'Conta' diretamente pois ela é uma classe abstrata")
        }

        this._saldo = saldoInicial;
        this._cliente= cliente;
        this._agencia = agencia;

    }

    set cliente(novoValor){
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;     
        }
    }

    get cliente(){
        return this._cliente;
    }


    get saldo(){
        return this._saldo;
    }

    // Metodo abstrato, que deve ser implementado pela classe que vai herdar
    sacar(valor) {

        const taxa = 1.01;
        return this._sacar(valor, taxa);
        
    }
    
    _sacar(valor, taxa){

        const valorSacado = taxa * valor;
            if (this._saldo >= valorSacado) {
                this._saldo -= valorSacado;
                return valorSacado;           
            }       
        return 0;    

    }

    depositar(valor){

        if (valor <= 100){

            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta){

        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        
    }
}