const { polarEncoder } = require('../exercices/obrigatorios.js');

describe('Testa a função polarEncoder', () => {
  it('7 Testa se a função polarEncoder retorna o valor esperado', () => {
    expect(polarEncoder('aysllan')).toBe('iysnnil');
    expect(polarEncoder('Aysllan')).toBe('iysnnil');
    expect(polarEncoder('AySlLaN')).toBe('iysnnil');
    expect(polarEncoder('eu sou legal')).toBe('ou seu nogin');
    expect(polarEncoder('vamos para o hexa brasil')).toBe('vimes ziti e hoxi btisan');
    expect(polarEncoder('esse aulao foi muito divertido')).toBe('osso iunie fea muare davotrade');
    expect(polarEncoder('zenit polar')).toBe('polar zenit');
    expect(polarEncoder('polar zenit')).toBe('zenit polar');
  });
});