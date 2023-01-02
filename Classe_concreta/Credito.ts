
export class Credito{
    valor: number;
    data: Date;
    

    constructor(valor: number) {
        this.valor = valor;
        this.data = new Date();
        
    }
}