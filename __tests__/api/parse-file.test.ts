import 'next-test-api-route-handler';
import { testApiHandler } from 'next-test-api-route-handler';
import * as pagesHandler from '../../pages/api/parse-file';

describe('API /api/parse-file', () => {

    // Testa se a API responde com sucesso 200 OK quando recebe um arquivo válido
  it('deve retornar 200 quando enviar um arquivo válido', async () => {
    await testApiHandler({
      pagesHandler,
      test: async ({ fetch }) => {
        const resp = await fetch({
          method: 'POST',
          headers: { 'Content-Type': 'text/plain' },
          body:
            '0000000088                             Terra Daniel DDS00000008360000000003     1899.0220210909\n' +
            '0000000103                                 Gail Bradtke00000009660000000005     1564.2120210507',
        });

        expect(resp.status).toBe(200);
        const json = await resp.json();
        expect(Array.isArray(json)).toBe(true);
      },
    });
  });

  // Testa se a API responde com erro quando o arquivo não é enviado, então retorna erro 400
  it('deve retornar 400 quando nenhum arquivo for enviado', async () => {
    await testApiHandler({
      pagesHandler,
      test: async ({ fetch }) => {
        const resp = await fetch({
          method: 'POST',
          headers: { 'Content-Type': 'text/plain' },
          body: '',
        });

        expect(resp.status).toBe(400);
      },
    });
  });

  // Testa se a API responde com erro quando o método não é POST, então retorna erro 405 
  it('deve retornar 405 quando o método não for POST', async () => {
    await testApiHandler({
      pagesHandler,
      test: async ({ fetch }) => {
        const resp = await fetch({ method: 'GET' });
        expect(resp.status).toBe(405);
      },
    });
  });
});
