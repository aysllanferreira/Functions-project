const {convertToCm} = require('../exercices/obrigatorios.js');

describe('2 Testa a função convertToCm', () => {
  it('Testa se a função convertToCm retorna o valor esperado', () => {
    expect(convertToCm(1)).toBe(100);
    expect(convertToCm(2)).toBe(200);
    expect(convertToCm(3)).toBe(300);
    expect(convertToCm(4)).toBe(400);
    expect(convertToCm(5)).toBe(500);
  });
});