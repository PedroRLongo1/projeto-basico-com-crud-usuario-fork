import { HttpRequest, HttpResponse } from '../../interfaces';
import Prato from '../../models/prato-model';

class CriarPratoController {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { nome, cozinha, descricao_resumida, descricao_detalhada, imagem, valor } = httpRequest.body;

      // Verifica se todos os campos obrigatórios foram preenchidos
      if (!nome || !cozinha || !descricao_resumida || !descricao_detalhada || !valor ) {
        return {
          statusCode: 400,
          body: { error: 'Nome, Cozinha, Descrição resumida, Descrição detalhada e valor são obrigatórios' },
        };
      }
      // Verifica se o nome tem pelo menos 3 caracteres
      if (nome.length < 3) {
        return {
          statusCode: 400,
          body: { error: 'O nome deve ter pelo menos 3 caracteres' },
        };
      }

      const prato_name = await Prato.findOne({ where: { nome } });

      if (prato_name) {
        return {
          statusCode: 400,
          body: { error: 'Prato já existe' },
        };
      }

      const prato = await Prato.create({
        nome,
        cozinha,
        descricao_resumida,
        descricao_detalhada,
        imagem,
        valor,
      });

      return {
        statusCode: 201,
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

export default CriarPratoController;