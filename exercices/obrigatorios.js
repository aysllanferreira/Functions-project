// Requisito 01

function sameValues(val1, val2) {
  if (val1 >= 6 && val2 >= 6) {
    return true;
  } else {
    return false;
  }
}

// Requisito 02

function convertToCm(meters) {
  return meters * 100;
}

// Requisito 03

function dobroTriploRaiz(numero) {
  const dobro = numero * 2;
  const triplo = numero * 3;
  const raizQuadrada = Math. sqrt(numero);

  return `O dobro de ${numero} é ${dobro}, o triplo é ${triplo} e a raiz quadrada é ${raizQuadrada}`
}

// Requisito 04

function createEmail(fullName) {

  const nome = fullName.toLowerCase().split(' ').join('_');

  return `${nome}@aulao.com`
}
// Requisito 05

function getPoints(wins, ties) {
  // escreva seu codigo aqui
}

// Requisito 06

function sumMinMax(numbers) {
  // escreva seu codigo aqui
}

// Requisito 07

function polarEncoder(sentence) {
  // escreva seu codigo aqui
}

// Requisito 08

function encodeLetter(letter) {
  // escreva seu codigo aqui
}

function decodeLetter(letter) {
  // escreva seu codigo aqui
}

// Requisito 09

function sumAndMultiplyBy2(numbers) {
  // escreva seu codigo aqui
}

// Requisito 10

function sumEvenNumbers(numbers) {
  // escreva seu codigo aqui
}

function sumOddNumbers(numbers) {
  // escreva seu codigo aqui
}

module.exports = {
  sameValues,
  convertToCm,
  dobroTriploRaiz,
  createEmail,
  getPoints,
  sumMinMax,
  polarEncoder,
  encodeLetter,
  decodeLetter,
  sumAndMultiplyBy2,
  sumEvenNumbers,
  sumOddNumbers,
};
