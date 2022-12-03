// Requisito Bonus 01

function validateCPF(cpf) {
  const cpfBlock1 = [];
  const cpfBlock2 = [];
  const cpfBlock3 = [];
  const cpfBlock4 = [];

  for (let index = 0; index < cpf.length; index += 1) {
    if (typeof (cpf[index]) === 'string' || cpf[index] > 9 || cpf[index] < 0) {
      return `CPF Inválido`;
    } else if (cpfBlock1.length < 3) {
      cpfBlock1.push(cpf[index]);
    } else if (cpfBlock2.length < 3) {
      cpfBlock2.push(cpf[index]);
    } else if (cpfBlock3.length < 3) {
      cpfBlock3.push(cpf[index]);
    } else if (cpfBlock4.length < 2) {
      cpfBlock4.push(cpf[index]);
    }
  }
  return `CPF: ${cpfBlock1.join('')}.${cpfBlock2.join('')}.${cpfBlock3.join('')}-${cpfBlock4.join('')}`
}

console.log(validateCPF([1, 2, 3, 4, 3, 2, 1, 3, 2, 1, 4]));
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
