const {validateCPF} = require('../exercices/osbonus.js');

describe('11 - Crie uma função que receba um CPF como parâmetro e retorne se ele é válido ou não.', () => {
  it('Testa se a função validateCPF existe', () => {
    expect(validateCPF).toBeDefined();
  });

  it('Testa se a função validateCPF é uma função', () => {
    expect(typeof validateCPF).toBe('function');
  });

  it('Testa se a função validateCPF retorna "CPF: XXX.XXX.XXX-XX" quando o CPF é válido', () => {
    expect(validateCPF([1,2,3,4,3,2,1,3,2,3,4])).toBe('CPF: 123.432.132-34');
  });

  it('Testa se a função validateCPF retorna "CPF Inválido" quando existe uma string', () => {
    expect(validateCPF([1,2,3,4,3,2,'a',3,2,3,4])).toBe('CPF Inválido');
  });

  it('Testa se a função validateCPF retorna "CPF Inválido" quando ha algum numero maior que 9', () => {
    expect(validateCPF([1,21,3,4,3,2,1,3,2,3,4])).toBe('CPF Inválido');
  });

  it('Testa se a função validateCPF retorna "CPF Inválido" quando ha algum numero menor que 0', () => {
    expect(validateCPF([1,2,3,-4,3,2,1,3,2,3,4])).toBe('CPF Inválido');
  });
});