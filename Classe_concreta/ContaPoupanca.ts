import { Conta } from '../Classe_abstrata/Conta'
import { Debito } from './Debito';

export class ContaPoupanca{

    //Variável da conta poupança.
    rentabilidademensal!: number;


    //Calcular rendimento mensal.
    public calcularRendimento(){
        
        //A definir a regra.

    }

    //Calcular saldo da conta poupança.
    public calcularSaldo(conta: Conta){
        
    }
}