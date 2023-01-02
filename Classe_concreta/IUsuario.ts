
export class IUsuario{
    //Variável IUsuario.
    autenticado: boolean;

    constructor(autenticar: boolean) {
        this.autenticado = autenticar;
    }

    //Método para validar interface.
    public userInterface(){
        
        return this.autenticado = true;
    }

}