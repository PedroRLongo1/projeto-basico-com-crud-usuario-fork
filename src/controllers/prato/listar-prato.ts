import { Controller, HttpRequest, HttpResponse } from '../../interfaces';
import Prato from '../../models/prato-model';

class ListarPratoController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const PratoId = httpRequest.params.id;
      const prato = await Prato.findByPk(PratoId);
      if (!prato && PratoId !== '{id}' && PratoId !== undefined) {
        return {
          statusCode: 404,
          body: { error: 'Usuário não encontrado' },
        };
      } else if (PratoId !== '{id}' && PratoId !== undefined) {
        return {
          statusCode: 200,
          body: prato,
        };
      }
      const pratos = await Prato.findAll();
      if (pratos.length === 0) {
        return {
          statusCode: 404,
          body: { error: 'Nenhum usuário encontrado' },
        };
      }
      return {
        statusCode: 200,
        body: pratos,
      };
    } catch (error: any) {
      return {
        statusCode: 500,
        body: { error: error.message },
      };
    }
  }
}

export default ListarPratoController;