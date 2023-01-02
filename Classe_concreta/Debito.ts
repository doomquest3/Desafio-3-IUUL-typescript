
export class Debito{
    valor: number;
    data: Date;


    constructor(valor: number) {
        this.valor = valor;
        this.data = new Date();

    }
}