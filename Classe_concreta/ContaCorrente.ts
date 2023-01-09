import { Conta } from "../Classe_abstrata/Conta";
import { ContaPoupanca } from "./ContaPoupanca";
import { Credito } from "./Credito";
import { Debito } from "./Debito";

export class ContaCorrente extends Conta {
    //Variável de limite de conta. extends Conta
    private limite: number;

    //Constructor
    constructor(numero: string, debito:Debito, credito: Credito, limite: number) {
        super(numero, debito, credito);
        this.limite = limite;

    }


    //Método set e get - limite
    
    public set setLimite(valor : number) {
        this.limite = valor;

    }
    
    public get getLimite() : number {
        return this.limite;

    }
    

    //Método para transferir dinheiro.
    public transferir(contaDestino: ContaPoupanca, valor: number){
        //Sacar dinheiro da conta
        const debito = new Debito(valor);
        this.sacar(debito, this.limite)
        
        //Enviar dinheiro
        const credito = new Credito(valor);
        contaDestino.depositar(credito);

    }

    
    //Método cálcular saldo.
    public calSaldo():void{
        var totalCreditos: number = 0;
        var totalDebitos: number = 0;

        this.creditoArray.forEach(element=>{
            totalCreditos += element.getValor;
        })

        this.debitoArray.forEach(element =>{
            totalDebitos += element.getValor;
        })
        
        console.log(`O cálculo do saldo da sua conta corrente é:${(totalCreditos - totalDebitos)+this.limite}`);

    }

}