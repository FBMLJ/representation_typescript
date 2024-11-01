import { field } from "projeto_validacao"
export  class LoginRepresentationRequest {

    @field({type: "string", required: true})
    email!: string;
    @field({type: "string", required: true})
    senha!: string;

}