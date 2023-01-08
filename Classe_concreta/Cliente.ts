import { Pessoa } from "../Classe_abstrata/Pessoa";
import { Endereco } from "./Endereco";
import { IUsuario } from "./IUsuario";

export class Cliente extends Pessoa implements IUsuario{
    //Variável vip de clientes.
    private endereco: Array<Endereco>;
    private vip: boolean;

    constructor(nome:string,
                cpf:string,
                telefone: string,
                endereco: Endereco,
                vip: boolean
                ) {
                    
        super(nome, cpf, telefone);
        this.vip = vip;
        this.endereco = [];
        this.endereco.push(endereco);
        
    }

    //Método set e get - Cliente;

    public set setCliente(v : boolean) {
        this.vip = v;
    }
    
    public get getCliente() : boolean {
        return this.vip;
    }

    //Método para adicionar endereço
    public addEndereco(endereco: Endereco): void{
        this.endereco.push(endereco);
    }
    
    //Método listar endereços.
    public listarEndereco(): void{
        this.endereco.forEach((element)=>{
            console.log(element);
        })

    }
        
    public userInterface(): boolean {
        return true;
    }
    
}