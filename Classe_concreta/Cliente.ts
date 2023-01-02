import { Endereco } from "./Endereco";
import { IUsuario } from "./IUsuario";

export class Cliente{
    //Variável vip de clientes.
    vip: boolean;

    constructor(vip: boolean) {
        this.vip = vip;
        
    }

    //Método listar endereços.
    public listarEndereco(list_end: Endereco[]){
        
        for(let i =0; i<list_end.length; i++){
            console.log(`Endereço número ${i}`);
            console.log(`${list_end[i].cep}`);
            console.log(`${list_end[i].logradouro}`);
            console.log(`${list_end[i].numero}`);
            console.log(`${list_end[i].complemento}`);
            console.log(`${list_end[i].cidade}`);
            console.log(`${list_end[i].uf}`);

        }

    }


}