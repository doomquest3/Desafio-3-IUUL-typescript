import { Cliente  } from "./Cliente";

export class Endereco{

    // Variáveis do endereço.
    cep!: string; // identificador
    logradouro!: string;
    numero!: string;
    complemento!: string;
    cidade!: string;
    uf!: string;
    
    /*=============== CEP ===============*/

    constructor(cep: string,
                logradouro: string,
                numero: string,
                complemento: string,
                cidade: string,
                uf: string){
        this.cep = cep;
        this.logradouro = logradouro;
        this.numero = numero;
        this.complemento = complemento;
        this.cidade = cidade;
        this.uf = uf;
    }

    /*
    /=============== CEP ===============/

    //Método para adicionar CEP.
    public set setCEP(cep : string) {
        this.cep = cep;
    
    }

    //Método recuperar CEP.
    public get getCEP(){
        return this.cep;
    }

    /=============== LOGRADOURO ===============/

    //Método para adicionar logradouro.
    public set setLogradouro(logradouro: string){
        this.logradouro = logradouro;

    }

    //Método para recuperar logradouro.
    public get getLogradouro(){
        return this.logradouro;

    }
    
    /=============== NÚMERO ===============/

    //Método para adicionar número.
    public set setNumero(numero: string){
        this.numero = numero;

    }

    //Método para recuperar número.
    public get getNumero(){
        return this.numero;

    }

    /=============== COMPLEMENTO ===============/

    //Método para adicionar complemento.
    public set setComplemento(complemento: string){
        this.complemento = complemento;

    }

    //Método para recuperar complemento.
    public get getComplemento(){
        return this.complemento;

    }

    /=============== CIDADE ===============/

    //Método para adicionar cidade.
    public set setCidade(cidade: string){
        this.cidade = cidade;

    }

    //Método para recuperar cidade.
    public get getCidade(){
        return this.cidade;

    }

    /=============== UF ===============/

    //Método para adicionar UF.
    public set setUF(uf: string){
        this.uf = uf;

    }

    //Método para recuperar UF.
    public get getUF(){
        return this.uf;

    }
    */


}