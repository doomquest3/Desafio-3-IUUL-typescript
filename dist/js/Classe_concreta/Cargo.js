export class Cargo {
    /*=============== CONSTRUTOR DA CLASSE ===============*/
    constructor(nome) {
        this.nome = nome;
    }
    //Métodos set e get - nome
    set setNome(nome) {
        this.nome = nome;
    }
    get getNome() {
        return this.nome;
    }
}
