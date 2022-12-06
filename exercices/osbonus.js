// Requisito Bonus 01

function validateCPF(cpf) {
  for (let index = 0; index < cpf.length; index += 1) {
    if (cpf[index] < 0 || cpf[index] > 9 || typeof cpf[index] === 'string' || cpf.length > 11) {
      return 'CPF Inválido';
    }
  }
  return `CPF: ${cpf.slice(0, 3).join('')}.${cpf.slice(3, 6).join('')}.${cpf.slice(6, 9).join('')}-${cpf.slice(-2).join('')}`;
}

// Requisito Bonus 02

function salaryAdjustment(salary) {
  // escreva seu codigo aqui
}

// Requisito Bonus 03

function highestNumber(array) {
  // escreva seu codigo aqui
}

function lowestNumber(array) {
  // escreva seu codigo aqui
}

module.exports = {
  validateCPF,
  salaryAdjustment,
  highestNumber,
  lowestNumber,
};
