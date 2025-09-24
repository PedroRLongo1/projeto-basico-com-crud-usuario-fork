import { Router } from "express";
import adaptRoute from "../adapters/express-route-adapter";
import ListarPratoController from "../controllers/prato/listar-prato";
import { authMiddleware } from "../middlewares";
import authorizeRoles from "../middlewares/authorize-roles";

export default (router: Router): void => {
  router.get("/pratos",
    authMiddleware,
    authorizeRoles(['Gerente', 'Funcionario', 'Cliente']),
    adaptRoute(new ListarPratoController()));
};
