import { Pessoa } from "../Classe_abstrata/Pessoa";
import { Cargo } from "./Cargo";
import { IUsuario } from "./IUsuario";


export class Funcionario extends Pessoa implements IUsuario{
    private CargoArray: Array<Cargo>;
    private salario: number;

    // Constructor da classe

    constructor(nome: string,
                cpf: string, 
                telefone: string,
                cargo: Cargo,
                salario: number) {
                    
        super(nome, cpf, telefone)
        this.CargoArray = [];
        this.CargoArray.push(cargo)
        this.salario = salario;
    }

    //Métodos set e get - Salário
    
    public set setSalario(valor : number) {
        this.salario = valor;
    }
    
    public get getSalario() : number {
        return this.salario;
    }

    //Método adicionar funcionário ao cargo
    public addFuncionario(cargo: Cargo):void{
        this.CargoArray.push(cargo);
    }

    userInterface(): boolean {
        return true;
    }
    
}