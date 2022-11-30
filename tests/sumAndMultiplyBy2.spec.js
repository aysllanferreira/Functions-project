const {sumAndMultiplyBy2} = require('../exercices/obrigatorios.js');

describe('9 Testa a função sumAndMultiplyBy2', () => {
  it('Testa se a função sumAndMultiplyBy2 retorna o valor esperado', () => {
    expect(sumAndMultiplyBy2([1, 2, 3, 4])).toBe(20);
    expect(sumAndMultiplyBy2([1, 2, 3, 4, 5])).toBe(30);
    expect(sumAndMultiplyBy2([1, 2, 3, 4, 5, 6])).toBe(42);
    expect(sumAndMultiplyBy2([1, 2, 3, 4, 5, 6, 7])).toBe(56);
    expect(sumAndMultiplyBy2([1, 2, 3, 4, 5, 6, 7, 8])).toBe(72);
  });
});