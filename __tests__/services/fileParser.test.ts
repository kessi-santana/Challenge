import { parseFileToJson } from '../../src/services/fileParser';
import { parseLine } from '../../src/services/fileParser';

// Testa se o arquivo é convertido corretamente para JSON
describe('parseFileToJson', () => {
  it('deve criar corretamente a estrutura JSON', () => {
    const linhasExemplo = [
      '0000000088                             Terra Daniel DDS00000008360000000003     1899.0220210909'
    ];

    const resultado = parseFileToJson(linhasExemplo);

    expect(resultado.length).toBe(1);
    expect(resultado[0].user_id).toBe(88);
    expect(resultado[0].orders[0].order_id).toBe(836);
    expect(resultado[0].orders[0].products[0].product_id).toBe(3);
  });
});

// Testa se a linha é convertida corretamente para objeto RawData
describe('parseLine', () => {
  it('deve retornar o objeto RawData corretamente', () => {
    const linhaExemplo = '0000000088                             Terra Daniel DDS00000008360000000003     1899.0220210909';
    const resultado = parseLine(linhaExemplo);

    expect(resultado).toEqual({
      userId: 88,
      name: 'Terra Daniel DDS',
      orderId: 836,
      productId: 3,
      value: '1899.02',
      date: '2021-09-09',
    });
  });
});

