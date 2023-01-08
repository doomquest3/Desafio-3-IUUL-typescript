import { Pessoa } from "../Classe_abstrata/Pessoa";
export class Funcionario extends Pessoa {
    // Constructor da classe
    constructor(nome, cpf, telefone, cargo, salario) {
        super(nome, cpf, telefone);
        this.CargoArray = [];
        this.CargoArray.push(cargo);
        this.salario = salario;
    }
    //Métodos set e get - Salário
    set setSalario(valor) {
        this.salario = valor;
    }
    get getSalario() {
        return this.salario;
    }
    //Método adicionar funcionário ao cargo
    addFuncionario(cargo) {
        this.CargoArray.push(cargo);
    }
    userInterface() {
        return true;
    }
}
