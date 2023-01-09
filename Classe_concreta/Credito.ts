
export class Credito{
    private valor: number;
    private data: Date;
    
    //Constructor - credito
    constructor(valor: number, data: Date) {
        this.valor = valor;
        this.data = data;
        
    }

    //Métodos set e get - Valor
    
    public set setValor(valor : number) {
        this.valor = valor;

    }

    public get getValor() : number {
        return this.valor;
    }


    //Método set e get - data
    public get getData() : Date {
        return this.data;
    }
    
    
}