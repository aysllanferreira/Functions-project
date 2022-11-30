const { sameValues } = require('../exercices/obrigatorios');

describe('1 Testes Obrigatórios', () => {
  it('Teste 1', () => {
    expect(sameValues(4,6)).toBe(false);
  });

  it('Teste 2', () => {
    expect(sameValues(8,7)).toBe(true);
  });

  it('Teste 3', () => {
    expect(sameValues(5,5)).toBe(false);
  });

  it('Teste 4', () => {
    expect(sameValues(6,6)).toBe(true);
  });

  it('Teste 5', () => {
    expect(sameValues(6,9)).toBe(true);
  });

  it('Teste 6', () => {
    expect(sameValues(9,6)).toBe(true);
  });
});
