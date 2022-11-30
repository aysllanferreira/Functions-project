const {dobroTriploRaiz} = require('../exercices/obrigatorios.js');

describe('3 Testa a função dobroTriploRaiz', () => {
  it('Testa se a função dobroTriploRaiz retorna o valor esperado', () => {
    expect(dobroTriploRaiz(1)).toBe('O dobro de 1 é 2, o triplo é 3 e a raiz quadrada é 1');
    expect(dobroTriploRaiz(2)).toBe('O dobro de 2 é 4, o triplo é 6 e a raiz quadrada é 1.4142135623730951');
    expect(dobroTriploRaiz(3)).toBe('O dobro de 3 é 6, o triplo é 9 e a raiz quadrada é 1.7320508075688772');
    expect(dobroTriploRaiz(4)).toBe('O dobro de 4 é 8, o triplo é 12 e a raiz quadrada é 2');
    expect(dobroTriploRaiz(5)).toBe('O dobro de 5 é 10, o triplo é 15 e a raiz quadrada é 2.23606797749979');
  });
});