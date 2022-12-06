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
  const salaryCompost = salary * (1 + 0.05) ** 5;
  return `Novo salário em 5 anos: R$ ${salaryCompost}`;
}

// Requisito Bonus 03

function highestNumber(array) {
  const bigNumber = Math.max(...array);
  let counter = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (bigNumber === array[index]) {
      counter += 1;
    }
  }
  return counter;
}

function lowestNumber(array) {
  const minNumber = Math.min(...array);
  let counter = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (minNumber === array[index]) {
      counter += 1;
    }
  }
  return counter;
}

module.exports = {
  validateCPF,
  salaryAdjustment,
  highestNumber,
  lowestNumber,
};
