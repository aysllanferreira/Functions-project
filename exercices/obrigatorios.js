// Requisito 01

function sameValues(val1, val2) {
  // escreva seu codigo aqui
  if (val1 >= 6 && val2 >= 6) {
    return true;
  }
  return false;
}

// Requisito 02

function convertToCm(meters) {
  // escreva seu codigo aqui
  return meters * 100;
}

// Requisito 03

function dobroTriploRaiz(numero) {
  // escreva seu codigo aqui
  const dobro = numero * 2;
  const triplo = numero * 3;
  const raiz = Math.sqrt(numero);

  return `O dobro de ${numero} é ${dobro}, o triplo é ${triplo} e a raiz quadrada é ${raiz}`;
}

// Requisito 04

function createEmail(fullName) {
  // escreva seu codigo aqui
  return `${fullName.replace(' ', '_').toLowerCase()}@aulao.com`;
}

// Requisito 05

function getPoints(wins, ties) {
  // escreva seu codigo aqui
  return (wins * 7) + (ties * 3);
}

// Requisito 06

function sumMinMax(numbers) {
  // escreva seu codigo aqui
  return (Math.max(...numbers)) + (Math.min(...numbers));
}

// Requisito 07

function polarEncoder(sentence) {
  // escreva seu codigo aqui
  const polar = sentence.toLowerCase().split('');
  const convertedSentence = [];

  for (let i = 0; i < polar.length; i += 1) {
    switch (polar[i]) {
      case 'z':
        convertedSentence.push('p');
        break;
      case 'e':
        convertedSentence.push('o');
        break;
      case 'n':
        convertedSentence.push('l');
        break;
      case 'i':
        convertedSentence.push('a');
        break;
      case 't':
        convertedSentence.push('r');
        break;
      case 'p':
        convertedSentence.push('z');
        break;
      case 'o':
        convertedSentence.push('e');
        break;
      case 'l':
        convertedSentence.push('n');
        break;
      case 'a':
        convertedSentence.push('i');
        break;
      case 'r':
        convertedSentence.push('t');
        break;
      default:
        convertedSentence.push(polar[i]);
    }
  }
  return convertedSentence.join('');
}

// Requisito 08

function encodeLetter(letter) {
  // escreva seu codigo aqui
  return letter
    .replace(/a/gi, '@')
    .replace(/e/gi, '3')
    .replace(/i/gi, '!')
    .replace(/o/gi, '0')
    .replace(/u/gi, 'Ʉ');
}

function decodeLetter(letter) {
  // escreva seu codigo aqui
  return letter
    .replace(/@/gi, 'a')
    .replace(/3/gi, 'e')
    .replace(/!/gi, 'i')
    .replace(/0/gi, 'o')
    .replace(/Ʉ/gi, 'u');
}

// Requisito 09

function sumAndMultiplyBy2(numbers) {
  // escreva seu codigo aqui
  // return numbers.reduce((contador, vAtual) => contador + vAtual) * 2;
  let soma = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    soma += numbers[i];
  }
  return soma * 2;
}

console.log(sumAndMultiplyBy2([1, 2, 3, 4, 5, 6]));

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
