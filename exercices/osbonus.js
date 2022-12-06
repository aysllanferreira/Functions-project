// Requisito Bonus 01

function validateCPF(cpf) {
  // escreva seu codigo aqui
  for (let index = 0; index < cpf.length; index += 1) {
    if (typeof cpf[index] !== 'number') {
      return 'CPF Inválido'
    }
    else if (cpf[index] > 9 || cpf[index] < 0) {
      return 'CPF Inválido'
    }
  }

  const digitosCpf1 = cpf.slice(0, 3);
  const digitosCpf2 = cpf.slice(3, 6);
  const digitosCpf3 = cpf.slice(6, 9);
  const digitosCpf4 = cpf.slice(9, 11);

  return `CPF: ${digitosCpf1.join('')}.${digitosCpf2.join('')}.${digitosCpf3.join('')}-${digitosCpf4.join('')}`;
  // }

  // console.log(validateCPF([1, 2, 3, 4, 3, 2, 1, 3, 2, 3, 4]));

  // Requisito Bonus 02

  function salaryAdjustment(salary) {
    // escreva seu codigo aqui
    const reajust = 5;
    const fiveYearsSalary = salary * (1 + reajust / 100) ** reajust;
    return `Novo salário em 5 anos: ${fiveYearsSalary.toFixed(2)}`;
  }

  // Requisito Bonus 03

  function highestNumber(array) {
    // escreva seu codigo aqui
    for (let index = 1; index < array.length; index += 1) {
      let higher = [0];
      let counterHigher = 1;

      if (array[index] > higher) {
        higher = array[index];
        counterHigher = 1;
      }
      else if (array[index] == higher) {
        counter += 1;
      }
    }
    return counter;
  }

  console.log(highestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]));


  function lowestNumber(array) {
    // escreva seu codigo aqui
    let lower = Math.min(...array);
    let counter = 0;

    for (let index = 0; index < array.length; index += 1) {
      if (array[index] === lower) {
        counter += 1;
      }
    }
    return lower
  }

  // console.log(lowestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]));

  module.exports = {
    validateCPF,
    salaryAdjustment,
    highestNumber,
    lowestNumber,
  }
}