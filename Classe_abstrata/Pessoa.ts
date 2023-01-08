
export class Pessoa{

    /*=============== VARIÁVEIS ===============*/
    private nome: string;
    private cpf: string;
    private telefone: string;


    /*=============== CONSTRUCTOR DA CLASSE ===============*/
    constructor(nome: string, cpf: string, telefone: string) {
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;

    }

    //Métodos set e get nome.

    public set setNome(name : string) {
        this.nome = name;
    }

    
    public get getNome() : string {
        return this.nome;
    }
    

    //Métodos set e get CPF.
    
    public set setCPF(cpf : string) {
        this.cpf = cpf;
    }
    
    
    public get getCPF() : string {
        return this.cpf;
    }
    

    //Métodos set e get Telefone
    
    public set setTelefone(telefone : string) {
        this.telefone = telefone;
    }
    
    
    public get getTelefone() : string {
        return this.telefone;
    }
    
    

    
}