export class Cargo{

    /*=============== VARIÁVEIS ===============*/
    private nome: string;
    
    /*=============== CONSTRUTOR DA CLASSE ===============*/
    constructor(nome: string) {
        this.nome = nome;
    }

    //Métodos set e get - nome

    
    public set setNome(nome : string) {
        this.nome = nome;

    }
    
    public get getNome() : string {
        return this.nome;
    }
    
}