import adaptRoute from "../adapters/express-route-adapter";
import { Router } from "express";
import CriarPratoController from "../controllers/prato/criar-prato";

export default (router: Router): void => {
  /**
   * @swagger
   * components:
   *   securitySchemes:
   *     bearerAuth:
   *       type: http
   *       scheme: bearer
   *       bearerFormat: JWT
   */

  /**
   * @swagger
   * tags:
   *   name: Pratos
   *   description: Gerenciamento de pratos API
   */

  /**
   * @swagger
   * /api/pratos:
   *   post:
   *     summary: Cria um novo prato
   *     tags: [Pratos]
   *     security:
   *       - bearerAuth: []
   *     requestBody:
   *       required: true
   *       content:
   *        application/json:
   *            schema:
   *              $ref: '#/components/schemas/Prato'
   *     responses:
   *       201:
   *         description: O prato foi criado com sucesso!
   *       500:
   *         description: Algum erro aconteceu
   */
  router.post("/pratos", adaptRoute(new CriarPratoController()));
};