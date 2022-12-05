// Requisito Bonus 01

function validateCPF(cpf) {
  // escreva seu codigo aqui
  for(let index = 0; index < cpf.length; index +=1){
    if(typeof cpf[index] !== 'number'){
      return `CPF Inválido`
    }
  }

  for(let index = 0; index < cpf.length; index +=1){
    if(cpf[index] > 9){
      return `CPF Inválido`
    }
  }

  for(let index = 0; index < cpf.length; index +=1){
    if(cpf[index] < 0){
      return `CPF Inválido`
    }
  }
const blockOne = cpf.slice(0, 3);
const blockTwo = cpf.slice(3, 6);
const blockThree = cpf.slice(6, 9);
const blockFour = cpf.slice(9, 11);
  return `CPF: ${blockOne.join('')}.${blockTwo.join('')}.${blockThree.join('')}-${blockFour.join('')}`
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
