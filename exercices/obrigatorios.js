// Requisito 01

function sameValues(val1, val2) {
  if (val1 && val2 >= 6) {
    return true;
  }
  return false;
}

// Requisito 02

function convertToCm(meters) {
  const centimeters = meters * 100;
  return centimeters;
}

// Requisito 03

function dobroTriploRaiz(numero) {
  const numdobro = numero * 2;
  const numtriplo = numero * 3;
  const numraiz = Math.sqrt(numero);
  return `O dobro de ${numero} é ${numdobro}, o triplo é ${numtriplo}} e a raiz quadrada é ${numraiz}`;
}

// Requisito 04

function createEmail(fullName) {
  const mail = fullName.split(' ').join('_');
  return `${mail}@aulao.com`;
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
