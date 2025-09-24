import { Router } from "express";
import adaptRoute from "../adapters/express-route-adapter";
import { BuscarPedidoController } from "../controllers/pedido/buscar-pedido";
import { authMiddleware } from "../middlewares";
import authorizeRoles from "../middlewares/authorize-roles";

export default (router: Router): void => {
    router.get("/pedidos/{id}",
        authMiddleware,
        authorizeRoles(['Gerente', 'Funcionario', 'Cliente']),
        adaptRoute(new BuscarPedidoController()));
};