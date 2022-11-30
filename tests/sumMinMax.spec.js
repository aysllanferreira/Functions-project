const {sumMinMax} = require('../exercices/obrigatorios.js');

describe('6 Testa a função sumMinMax', () => {
  it('Testa se a função sumMinMax retorna o valor esperado', () => {
    expect(sumMinMax([3, 2, 1, 4, 5])).toEqual(6);
    expect(sumMinMax([8, 4, 10, 8, 2])).toEqual(12);
    expect(sumMinMax([96, 4, 9, 4, 15])).toEqual(100);
    expect(sumMinMax([4, 8, 12, 16, 20])).toEqual(24);
    expect(sumMinMax([8, 10, 15, 9, 25])).toEqual(33);
  });
});