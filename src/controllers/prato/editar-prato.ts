import { Controller, HttpRequest, HttpResponse } from '../../interfaces';
import Prato from '../../models/user-model';

class EditarPratoController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { id } = httpRequest.params;
    const { nome, cozinha, descricao_resumida, descricao_detalhada, imagem, valor } = httpRequest.body;
    try {
      const prato = await Prato.findByPk(id);
      if (!prato) {
        return {
          statusCode: 404,
          body: { error: 'Prato não encontrado' },
        };
      }
      await prato.update({
        nome,
        cozinha,
        descricao_resumida,
        descricao_detalhada,
        imagem,
        valor,
      });
      return {
        statusCode: 200,
        body: prato,
      };
    } catch (error: any) {
      return {
        statusCode: 500,
        body: { error: error.message },
      };
    }
  }
}

export default EditarPratoController;
