import { Funcionario } from "../Classe_concreta/Funcionario";

export class Pessoa{

    /*=============== VARIÁVEIS ===============*/
    nome: string;
    cpf: string;
    telefone: string;


    /*=============== CONSTRUCTOR DA CLASSE ===============*/
    constructor(nome: string, cpf: string, telefone: string) {
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;

    }

    
}