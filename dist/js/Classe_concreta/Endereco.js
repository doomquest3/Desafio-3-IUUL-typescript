export class Endereco {
    /*=============== Constructor endereco ===============*/
    constructor(cep, logradouro, numero, complemento, cidade, uf) {
        this.cep = cep;
        this.logradouro = logradouro;
        this.numero = numero;
        this.complemento = complemento;
        this.cidade = cidade;
        this.uf = uf;
    }
    /*=============== CEP ===============*/
    //Método para adicionar CEP.
    set setCEP(cep) {
        this.cep = cep;
    }
    //Método recuperar CEP.
    get getCEP() {
        return this.cep;
    }
    /*=============== LOGRADOURO ===============*/
    //Método para adicionar logradouro.
    set setLogradouro(logradouro) {
        this.logradouro = logradouro;
    }
    //Método para recuperar logradouro.
    get getLogradouro() {
        return this.logradouro;
    }
    /*=============== NÚMERO ===============*/
    //Método para adicionar número.
    set setNumero(numero) {
        this.numero = numero;
    }
    //Método para recuperar número.
    get getNumero() {
        return this.numero;
    }
    /*=============== COMPLEMENTO ===============*/
    //Método para adicionar complemento.
    set setComplemento(complemento) {
        this.complemento = complemento;
    }
    //Método para recuperar complemento.
    get getComplemento() {
        return this.complemento;
    }
    /*=============== CIDADE ===============*/
    //Método para adicionar cidade.
    set setCidade(cidade) {
        this.cidade = cidade;
    }
    //Método para recuperar cidade.
    get getCidade() {
        return this.cidade;
    }
    /*=============== UF ===============*/
    //Método para adicionar UF.
    set setUF(uf) {
        this.uf = uf;
    }
    //Método para recuperar UF.
    get getUF() {
        return this.uf;
    }
}
