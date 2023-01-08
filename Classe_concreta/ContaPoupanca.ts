import { Conta } from "../Classe_abstrata/Conta";

export class ContaPoupanca extends Conta{

    //Variável da conta poupança.
    private rentabilidademensal: number;

    //Constructor
    constructor(numero: string, valor: number) {
        super(numero)
        this.rentabilidademensal = valor;
    
    }


    //Método set e get - Rentabilidade
    public set setRM(valor : number) {
        this.rentabilidademensal = valor;
    
    }
    
    public get getRM() : number {
        return this.rentabilidademensal;

    }
    

    //Calcular rendimento mensal.
    public calcularRendimento(){
        
        //A definir a regra.

    }

    
    //Calcular saldo da conta poupança.
    public calcularSaldo(){
        
    }
}