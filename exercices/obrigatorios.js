// Requisito 01

function sameValues(val1, val2) {
  // escreva seu codigo aqui
  const getArray = [val1, val2];
  const verifyNumbers = getArray.every((number) => number >= 6);
  return verifyNumbers;
}

// Requisito 02

function convertToCm(meters) {
  // escreva seu codigo aqui
  return meters * 100;
}

// Requisito 03

function dobroTriploRaiz(numero) {
  // escreva seu codigo aqui
  const double = numero * 2;
  const triple = numero * 3;
  const squareRoot = Math.sqrt(numero);
  return `O dobro de ${numero} é ${double}, o triplo é ${triple} e a raiz quadrada é ${squareRoot}`;
}

// Requisito 04

function createEmail(fullName) {
  // escreva seu codigo aqui
  const email = fullName.toLowerCase().split(' ').join('_');
  return `${email}@aulao.com`;
}

// Requisito 05

function getPoints(wins, ties, losses) {
  // escreva seu codigo aqui
  return (wins * 7) + (ties * 3) + (losses * 0);
}

// Requisito 06

function sumMinMax(numbers) {
  // escreva seu codigo aqui
  return Math.min(...numbers) + Math.max(...numbers);
}

// Requisito 07

function polarEncoder(sentence) {
  // escreva seu codigo aqui
  const sentenceArray = sentence.toLowerCase().split('');
  const newArray = [];

  for (let index = 0; index < sentenceArray.length; index += 1) {
    switch (sentenceArray[index]) {
      case 'z':
        newArray.push('p');
        break;
      case 'e':
        newArray.push('o');
        break;
      case 'n':
        newArray.push('l');
        break;
      case 'i':
        newArray.push('a');
        break;
      case 't':
        newArray.push('r');
        break;
      case 'p':
        newArray.push('z');
        break;
      case 'o':
        newArray.push('e');
        break;
      case 'l':
        newArray.push('n');
        break;
      case 'a':
        newArray.push('i');
        break;
      case 'r':
        newArray.push('t');
        break;
      default:
        newArray.push(sentenceArray[index]);
        break;
    }
  }

  return newArray.join('');
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
