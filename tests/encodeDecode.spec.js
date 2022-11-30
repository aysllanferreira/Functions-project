const {encodeLetter, decodeLetter} = require('../exercices/obrigatorios.js');

describe('8 Testa a função encodeLetter', () => {
  it('Testa se a função encodeLetter retorna o valor esperado', () => {
    expect(encodeLetter('eu sempre vou estar aqui')).toBe('3Ʉ s3mpr3 v0Ʉ 3st@r @qɄ!');
    expect(encodeLetter('eu sou legal')).toBe('3Ʉ s0Ʉ l3g@l');
    expect(encodeLetter('vamos para o hexa brasil')).toBe('v@m0s p@r@ 0 h3x@ br@s!l');
    expect(encodeLetter('esse aulao foi muito divertido')).toBe('3ss3 @Ʉl@0 f0! mɄ!t0 d!v3rt!d0');
    expect(encodeLetter('zenit polar')).toBe('z3n!t p0l@r');
  });
});