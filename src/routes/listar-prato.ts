import { Router } from "express";
import adaptRoute from "../adapters/express-route-adapter";
import authMiddleware from "../middlewares/auth-middleware";
import ListarPratoController from "../controllers/prato/listar-prato";

export default (router: Router): void => {
  /**
   * @swagger
   * /api/pratos/{id}:
   *   get:
   *     summary: Lista as informações de um prato
   *     tags: [Pratos]
   *     security:
   *       - bearerAuth: []
   *     requestBody:
   *       required: true
   *       content:
   *        application/json:
   *            schema:
   *                type: object
   *                required:
   *                    - id
   *                properties:
   *                    nome:
   *                        type: string
   *                        description: O nome do prato
   *     responses:
   *       200:
   *         description: O prato foi retornado com sucesso
   *         content:
   *          application/json:
   *           schema:
   *             type: array
   *             items:
   *              $ref: '#/components/schemas/Pratos'
   * 
   *       500:
   *         description: Algum erro aconteceu
   */
  router.get(
    "/pratos{/:id}",
    authMiddleware,
    adaptRoute(new ListarPratoController())
  );
};
