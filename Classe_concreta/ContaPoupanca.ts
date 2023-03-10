import { Conta } from "../Classe_abstrata/Conta";
import { Credito } from "./Credito";
import { Debito } from "./Debito";

export class ContaPoupanca extends Conta{

    //Variável da conta poupança
    private rentabilidademensal: number;

    //Constructor
    constructor(numero: string, debito: Debito, credito: Credito, valor: number) {
        super(numero, debito, credito)
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
        var totalCredito: number;
        var totalDebito: number;
        
        if(this.creditoArray.length > this.debitoArray.length){

            this.creditoArray.forEach(element =>{
              totalCredito = element.getValor;
              this.debitoArray.forEach(element =>{
                totalDebito = element.getValor;
              })
              console.log(`O total de rendimento do dia ${element.getData} é: ${(totalCredito - totalDebito)*this.rentabilidademensal}`);
            })
        
        }
        
    }

    
    //Calcular saldo da conta poupança.
    public calcularSaldo(){
        var totalCreditos: number = 0;
        var totalDebitos: number = 0;

        this.creditoArray.forEach(element=>{
            totalCreditos += element.getValor;
        })

        this.debitoArray.forEach(element =>{
            totalDebitos += element.getValor;
        })
        
        console.log(`O cálculo do saldo da sua conta poupança é:${(totalCreditos - totalDebitos)+this.rentabilidademensal}`);
    }
}