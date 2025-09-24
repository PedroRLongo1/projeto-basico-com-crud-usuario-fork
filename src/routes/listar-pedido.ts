import { Router } from "express";
import adaptRoute from "../adapters/express-route-adapter";
import { ListarPedidoController } from "../controllers/pedido/listar-pedido";
import { authMiddleware } from "../middlewares";
import authorizeRoles from "../middlewares/authorize-roles";

export default (router: Router): void => {
    router.get("/pedidos",
        authMiddleware,
        authorizeRoles(['Gerente', 'Funcionario', 'Cliente']),
        adaptRoute(new ListarPedidoController()));
};