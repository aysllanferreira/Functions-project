// Requisito Bonus 01

function validateCPF(cpf) {
  // escreva seu codigo aqui
  // const verifyIfIsNumber = cpf.every((array) => typeof array === 'number');
  // if (verifyIfIsNumber === false) {
  //   return 'CPF Inválido';
  // }

  for (let i = 0; i < cpf.length; i += 1) {
    if (typeof cpf[i] !== 'number') {
      return 'CPF Inválido';
    }
  }

  const checkNumbers = cpf.every((numeros) => numeros < 9 && numeros >= 0);

  if (checkNumbers === false) {
    return 'CPF Inválido';
  }

  const get3Digits = cpf.slice(0, 3);
  const get3Digits2 = cpf.slice(3, 6);
  const get3Digits3 = cpf.slice(6, 9);
  const get2Digits = cpf.slice(9, 11);

  return `CPF: ${get3Digits.join('')}.${get3Digits2.join('')}.${get3Digits3.join('')}-${get2Digits.join('')}`;
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
