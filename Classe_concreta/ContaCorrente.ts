import { Conta } from "../Classe_abstrata/Conta";
import { Credito } from "./Credito";
import { Debito } from "./Debito";


export class ContaCorrente extends Conta{
    //Variável de limite de conta.
    private limite: number;

    //Constructor
    constructor(numero: string, limite: number) {
        super(numero);
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
    public transferir(){
        
    }

    
    //Método cálcular saldo.
    public calSaldo(){
        
    }

}