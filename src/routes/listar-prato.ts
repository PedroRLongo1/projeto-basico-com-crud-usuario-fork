import { Router } from "express";
import adaptRoute from "../adapters/express-route-adapter";
import authMiddleware from "../middlewares/auth-middleware";
import ListarPratoController from "../controllers/prato/listar-prato";

export default (router: Router): void => {
  /**
   * @swagger
   * /api/pratos/{id}:
   *   get:
   *     summary: Retorna a lista de pratos
   *     tags: [Pratos]
   *     security:
   *       - bearerAuth: []
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: integer
   *         required: false
   *         description: O id do prato
   *     responses:
   *       200:
   *         description: A lista de pratos foi retornada com sucesso
   *         content:
   *          application/json:
   *              schema:
   *                $ref: '#/components/schemas/Prato'

   */
  router.get(
    "/pratos{/:id}",
    authMiddleware,
    adaptRoute(new ListarPratoController())
  );
};
