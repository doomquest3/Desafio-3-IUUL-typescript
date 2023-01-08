export class Pessoa {
    /*=============== CONSTRUCTOR DA CLASSE ===============*/
    constructor(nome, cpf, telefone) {
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;
    }
    //Métodos set e get nome.
    set setNome(name) {
        this.nome = name;
    }
    get getNome() {
        return this.nome;
    }
    //Métodos set e get CPF.
    set setCPF(cpf) {
        this.cpf = cpf;
    }
    get getCPF() {
        return this.cpf;
    }
    //Métodos set e get Telefone
    set setTelefone(telefone) {
        this.telefone = telefone;
    }
    get getTelefone() {
        return this.telefone;
    }
}
