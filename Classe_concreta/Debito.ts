
export class Debito{
    private valor: number;
    private data: Date;

    //Constructor - Debito
    constructor(valor: number) {
        this.valor = valor;
        this.data = new Date();

    }

    
    //Métodos set e get - valor
    public set setValor(valor : number) {
        this.valor = valor;

    }

    public get getValor() : number {
        return this.valor;

    }

    
    public get getData() : Date {
        return this.data;
    }
    
    

}