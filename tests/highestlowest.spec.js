const { highestNumber, lowestNumber} = require('../exercices/osbonus.js');

describe('13.1 - Crie uma função que calcule quantas vezes se repete o maior número em um array.', () => {
  it('Testa se a função highestNumber existe', () => {
    expect(highestNumber).toBeDefined();
  });

  it('Testa se a função highestNumber é uma função', () => {
    expect(typeof highestNumber).toBe('function');
  });

  it('Testa se a função highestNumber retorna quantas vezes se repete o maior número em um array', () => {
    expect(highestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10])).toBe(4);
  });
});

describe('13.2 - Crie uma função que receba um array de números e retorne o menor número.', () => {
  it('Testa se a função lowestNumber existe', () => {
    expect(lowestNumber).toBeDefined();
  });

  it('Testa se a função lowestNumber é uma função', () => {
    expect(typeof lowestNumber).toBe('function');
  });

  it('Testa se a função lowestNumber retorna o menor número de um array', () => {
    expect(lowestNumber([1, 2, 3, 4, 1, 6, 7, 8, 9, 10])).toBe(2);
  });
});

