import { Conta } from "../Classe_abstrata/Conta";
import { Cargo } from "./Cargo";
import { IUsuario } from "./IUsuario";

export class Funcionario{
    salario: number;

    


    //Realizar login na interface
    public loginUIusuario(){
        var login = new IUsuario();

        if(login.userInterface()){
            console.log(`Login realizado com sucesso, ${login.userInterface()}`);
        }else{
            console.log(`Erro ao realizar o login!`)
        }
    }
}