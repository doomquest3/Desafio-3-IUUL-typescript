
import { Credito } from "../Classe_concreta/Credito";
import { Debito } from "../Classe_concreta/Debito";


export class Conta{

    //Número da conta do usuário.
    numero: string;
    
    constructor(numero: string){
        this.numero = numero;
    }

    //Método para sacar dinheiro.
    public sacar(saque: number){
        var debito = new Debito(800);
        if((debito.valor - saque)<0){
            console.log(`Saldo insuficiente para realizar saque, seu saldo É: ${debito.valor}`);

        }else{
            debito.valor -= saque;
            console.log(`Saque realizado com sucesso! Seu saque foi de: ${saque}`);

        }
        
        
    }

    //Método para depositar dinheiro na conta.
    public depositar(valor: number){[]
        var ContaCredito = new Credito(800);
        ContaCredito.valor += valor;
        console.log(`Deposito realizado com sucesso! Saldo atual: ${ContaCredito.valor}`)
        
    }

    
    
}