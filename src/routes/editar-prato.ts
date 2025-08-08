import { Router } from "express";
import adaptRoute from "../adapters/express-route-adapter";
import authMiddleware from "../middlewares/auth-middleware";
import EditarPratoController from "../controllers/usuario/editar-usuario";

export default (router: Router): void => {
  /**
   * @swagger
   * /api/pratos/{id}:
   *   put:
   *     summary: Atualiza o prato por id
   *     tags: [Pratos]
   *     security:
   *       - bearerAuth: []
   *     parameters:
   *       - in: path
   *         name: id
   *     requestBody:
   *       required: true
   *       content:
   *        application/json:
   *            schema:
   *              $ref: '#/#components/schemas/Prato'
   *                example:
   *                    nome: "Feijoada"
   *                    cozinha: "Brasileira"
   *                    descricao_resumida: "Feijoada tradicional brasileira"
   *                    descricao_detalhada: "Feijoada é um prato típico brasileiro, feito com feijão preto, carne de porco e acompanhamentos como arroz, farofa e couve."
   *                    imagem: "https://example.com/imagem-feijoada.jpg"
   *                    valor: 49.90
   * 
   *     responses:
   *       200:
   *         description: O prato foi atualizado com sucesso
   *       404:
   *         description: O prato não foi encontrado
   *       500:
   *         description: Algum erro aconteceu
   */
  router.put(
    "/pratos/:id",
    authMiddleware,
    adaptRoute(new EditarPratoController())
  );
};