import { notNull } from "projeto_validacao";

/**
 * @swagger
 * components:
 *   schemas:
 *     Investimento:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: O ID do investimento
 *         valor:
 *           type: number
 *           description: O valor do investimento
 *         descricao:
 *           type: string
 *           description: A descrição do investimento
 */
export default class InvestimentoRepresentation {
    @notNull()
    name: string = ""

    
    valorCompraReferencia?: number = undefined;

    valorVendaReferencia?: number = undefined;
    @notNull()
    link: string = ""

}