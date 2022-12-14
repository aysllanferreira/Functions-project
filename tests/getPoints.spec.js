const {getPoints} = require('../exercices/obrigatorios.js');

describe('5 Testa a função getPoints', () => {
  it('Testa se a função getPoints retorna o valor esperado', () => {
    expect(getPoints(1, 1)).toEqual(10);
    expect(getPoints(2, 4)).toEqual(26);
    expect(getPoints(3, 6)).toEqual(39);
    expect(getPoints(4, 8)).toEqual(52);
    expect(getPoints(5, 10)).toEqual(65);
  });
});