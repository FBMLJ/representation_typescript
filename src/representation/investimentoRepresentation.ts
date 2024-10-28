import { notNull } from "projeto_validacao";

export default class InvestimentoRepresentation {
    @notNull()
    name: string = ""

    
    valorCompraReferencia?: number = undefined;

    valorVendaReferencia?: number = undefined;
    @notNull()
    link: string = ""

}