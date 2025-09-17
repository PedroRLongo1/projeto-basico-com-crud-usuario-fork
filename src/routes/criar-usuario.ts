import adaptRoute from "../adapters/express-route-adapter";
import { Router } from "express";
import CriarUsuarioController from "../controllers/usuario/criar-usuario";

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
   * components:
   *   schemas:
   *     User:
   *       type: object
   *       required:
   *         - nome
   *         - senha
   *         - email
   *         - role
   *       properties:
   *         nome:
   *           type: string
   *           description: O nome de usuário
   *         senha:
   *           type: string
   *           description: A senha do usuário
   *         email:
   *           type: string
   *           description: O email do usuário
   *         role:
   *           type: string
   *           description: Papel do usuário no sistema
   *       example:
   *         id: 1
   *         nome: "João da Silva"
   *         senha: "123abc"
   *         email: "joao.silva@dominio.com"
   *         role: "Gerente"
   *     Prato:
   *       type: object
   *       required:
   *         - id
   *         - nome
   *         - cozinha
   *         - descricao_resumida
   *         - descricao_detalhada
   *         - valor
   *       properties:
   *         id:
   *           type: integer
   *           description: O id do prato
   *         nome:
   *           type: string
   *           description: O nome de usuário
   *         cozinha:
   *           type: string
   *           description: A cozinha do prato
   *         descricao_resumida:
   *           type: string
   *           description: A descrição resumida do prato
   *         descricao_detalhada:
   *           type: string
   *           description: A descrição detalhada do prato
   *         imagem:
   *           type: string
   *           description: A imagem do prato
   *         valor:
   *           type: number
   *           description: O valor do prato
   *       example:
   *           nome: "Feijoada"
   *           cozinha: "Brasileira"
   *           descricao_resumida: "Feijoada tradicional brasileira"
   *           descricao_detalhada: "Feijoada é um prato típico brasileiro, feito com feijão preto, carne de porco e acompanhamentos como arroz, farofa e couve."
   *           imagem: "https://example.com/imagem-feijoada.jpg"
   *           valor: 49.90
   */

  /**
   * @swagger
   * tags:
   *   name: Users
   *   description: Gerenciamento de usuários API
   */

  /**
   * @swagger
   * /api/users:
   *   post:
   *     summary: Cria um novo usuário
   *     tags: [Users]
   *     security:
   *       - bearerAuth: []
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/User'
   *     responses:
   *       201:
   *         description: O usuário foi criado com sucesso!
   *       500:
   *         description: Algum erro aconteceu
   */
  router.post("/users", adaptRoute(new CriarUsuarioController()));
};
