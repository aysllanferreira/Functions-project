const { sumEvenNumbers, sumOddNumbers} = require('../exercices/obrigatorios.js');

describe('10.1 Testa a função sumEvenNumbers', () => {
  it('Testa se a função sumEvenNumbers retorna o valor esperado', () => {
    expect(sumEvenNumbers([1, 2, 3, 4])).toBe(6);
    expect(sumEvenNumbers([1, 2, 3, 4, 5])).toBe(6);
    expect(sumEvenNumbers([1, 2, 3, 4, 5, 6])).toBe(12);
    expect(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7])).toBe(12);
    expect(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8])).toBe(20);
  });
});

describe('10.2 Testa a função sumOddNumbers', () => {
  it('Testa se a função sumOddNumbers retorna o valor esperado', () => {
    expect(sumOddNumbers([1, 2, 3, 4])).toBe(4);
    expect(sumOddNumbers([1, 2, 3, 4, 5])).toBe(9);
    expect(sumOddNumbers([1, 2, 3, 4, 5, 6])).toBe(9);
    expect(sumOddNumbers([1, 2, 3, 4, 5, 6, 7])).toBe(16);
    expect(sumOddNumbers([1, 2, 3, 4, 5, 6, 7, 8])).toBe(16);
  });
});