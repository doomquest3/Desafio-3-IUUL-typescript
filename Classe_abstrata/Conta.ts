
export class Conta{

    //Número da conta do usuário.
    private numero: string;
    
    constructor(numero: string){
        this.numero = numero;
    }

    //Métodos set e get Número da conta.

    public set setNumero(value : string) {
        this.numero = value;
    }
    
    
    public get getNumero() : string {
        return this.numero;
    }
    
    
    //Método para sacar dinheiro.
    public sacar(valor: number){
        
        
    }

    //Método para depositar dinheiro na conta.
    public depositar(valor: number){

    }

    
    
}