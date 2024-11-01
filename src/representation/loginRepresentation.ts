import { field } from "projeto_validacao"
export default class LoginRepresentation {

    @field({type: "string", required: true})
    email: string = "";
    @field({type: "string", required: true})
    senha : string = "";

}