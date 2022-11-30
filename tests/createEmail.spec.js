const {createEmail} =  require('../exercices/obrigatorios.js');

describe('4 Testa a função createEmail', () => {
  it('Testa se a função createEmail retorna o valor esperado', () => {
    expect(createEmail('Joao Silva')).toBe('joao_silva@aulao.com');
    expect(createEmail('Maria Silva')).toBe('maria_silva@aulao.com');
    expect(createEmail('Pedro Silva')).toBe('pedro_silva@aulao.com');
    expect(createEmail('Ana Silva')).toBe('ana_silva@aulao.com');
    expect(createEmail('Paulo Silva')).toBe('paulo_silva@aulao.com');
  });
});