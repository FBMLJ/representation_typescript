import { field } from "projeto_validacao";

export class MessagemPadraoReponse {
    @field({type: "string",example: "processo realizado com sucesso"})
    mensagem!:string
    constructor(mensagem: string){
        this.mensagem = mensagem;
    }
}