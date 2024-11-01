import { field } from "projeto_validacao";


export  class InvestimentoRepresentation {
    @field({type: "string", required: true})
    name!: string;
    @field({type: "number"})
    valorCompraReferencia?: number ;
    @field({type: "number"})
    valorVendaReferencia?: number;
    @field({type: "string", required: true})
    link!: string;

}