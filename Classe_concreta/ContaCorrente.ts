import { Conta } from "../Classe_abstrata/Conta";


export class ContaCorrente{
    //Variável de limite de conta.
    limite!: number;

    
    constructor(limite: number) {
        this.limite = limite;
    }

    //Método para transferir dinheiro.
    public transferir(contaOrigem: Conta, contaDestino: Conta, valor: number){

        contaOrigem.sacar(valor);
        contaDestino.depositar(valor);
    }

    //Método cálcular saldo.
    public calSaldo(conta: Conta){
        
    }

}