
import { Credito } from "../Classe_concreta/Credito";
import { Debito } from "../Classe_concreta/Debito";

export class Conta{

    //Número da conta do usuário.
    private numero: string;
    public debitoArray: Array<Debito>;
    public creditoArray: Array<Credito>;

    constructor(numero: string, debito: Debito, credito: Credito){
        this.numero = numero;
        this.debitoArray = []
        this.debitoArray.push(debito);
        this.creditoArray = [];
        this.creditoArray.push(credito);
    }


    //Métodos set e get Número da conta.

    public set setNumero(value : string) {
        this.numero = value;

    }
    
    public get getNumero() : string {
        return this.numero;

    }


    //Método set e get - Debito
    
    public set setDebito(debito : Debito) {
        this.debitoArray.push(debito);

    }
    
    
    //Método set e get - Credito

    public set setCredito(credito: Credito) {
        this.creditoArray.push(credito);

    }
    

    //Método para sacar dinheiro.
    public sacar(debito: Debito, limite: number){
        if(debito.getValor > 0 && debito.getValor < limite){
            this.debitoArray.push(debito);
            console.log(`Saque realizado com sucesso!`);
            console.log(`Foi realizado o saque de: R$${debito.getValor} reais.`);

        }else{
            console.log(`Erro ao realizar saque de dinheiro!`);

            if(debito.getValor > limite){
                console.log(`O montate requisitado em saque é maior que o limite!`);

            }else if(debito.getValor == 0){
                console.log(`O montate requisitado é igual a zero!`);

            }

        }

    }

    //Método para depositar dinheiro na conta.
    public depositar(credito: Credito){
        this.creditoArray.push(credito);
        console.log(`Deposito realizado com sucesso! Foi depositado ${credito.getValor}`);

    }

    
    
}