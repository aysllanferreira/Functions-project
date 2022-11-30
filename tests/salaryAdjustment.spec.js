const { salaryAdjustment } = require('../exercices/osbonus.js');

describe('12 - Crie uma função que seja capaz de fazer o reajuste salarial de um funcionário.', () => {
  it('Testa se a função salaryAdjustment existe', () => {
    expect(salaryAdjustment).toBeDefined();
  });

  it('Testa se a função salaryAdjustment é uma função', () => {
    expect(typeof salaryAdjustment).toBe('function');
  });

  it('Testa se a função salaryAdjustment retorna o salário atual, o reajuste e o novo salário em 5 anos', () => {
    expect(salaryAdjustment(1000)).toBe('Novo salário em 5 anos: R$ 1276.28');
  });
});