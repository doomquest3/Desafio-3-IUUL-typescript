
export class Debito{
    valor: number;
    data: Date;

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
    

}