import { Pessoa } from "../Classe_abstrata/Pessoa";
export class Cliente extends Pessoa {
    constructor(nome, cpf, telefone, endereco, vip) {
        super(nome, cpf, telefone);
        this.vip = vip;
        this.endereco = [];
        this.endereco.push(endereco);
    }
    //Método set e get - Cliente;
    set setCliente(v) {
        this.vip = v;
    }
    get getCliente() {
        return this.vip;
    }
    //Método para adicionar endereço
    addEndereco(endereco) {
        this.endereco.push(endereco);
    }
    //Método listar endereços.
    listarEndereco() {
        this.endereco.forEach((element) => {
            console.log(element);
        });
    }
    userInterface() {
        return true;
    }
}
