import { notNull } from "projeto_validacao"
export default class LoginRepresentation {

    @notNull()
    email: string = "";
    @notNull()
    senha : string = "";

}