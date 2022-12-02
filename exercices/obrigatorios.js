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
  const raizQuadrada = Math.sqrt(numero);

  return `O dobro de ${numero} é ${dobro}, o triplo é ${triplo} e a raiz quadrada é ${raizQuadrada}`
}

// Requisito 04

function createEmail(fullName) {

  const nome = fullName.toLowerCase().split(' ').join('_');

  return `${nome}@aulao.com`
}
// Requisito 05

function getPoints(wins, ties) {

  let totalPoints = 0;

  for (let index = 1; index <= wins; index += 1) {
    totalPoints += 7;
  }
  for (let index = 1; index <= ties; index += 1) {
    totalPoints += 3;
  }

  return totalPoints
}
// Requisito 06

function sumMinMax(numbers) {
  let maior = numbers[0];
  let menor = numbers[0];

  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maior) {
      maior = numbers[index];
    } else if (numbers[index] < menor) {
      menor = numbers[index];
    }
  }

  return maior + menor
}

// Requisito 07

function polarEncoder(sentence) {

  let fraseCodificada = '';

  for (let letter in sentence) {
    switch (sentence[letter].toLowerCase()) {
      case 'z':
        fraseCodificada += 'p'
        break;
      case 'e':
        fraseCodificada += 'o'
        break;
      case 'n':
        fraseCodificada += 'l'
        break;
      case 'i':
        fraseCodificada += 'a'
        break;
      case 't':
        fraseCodificada += 'r'
        break;
      case 'p':
        fraseCodificada += 'z'
        break;
      case 'o':
        fraseCodificada += 'e'
        break;
      case 'l':
        fraseCodificada += 'n'
        break;
      case 'a':
        fraseCodificada += 'i'
        break;
      case 'r':
        fraseCodificada += 't'
        break;
      default:
        fraseCodificada += sentence[letter].toLowerCase();
        break;
    }
  }
  return fraseCodificada
}

// Requisito 08

function encodeLetter(letter) {

  let fraseCodificada = '';

  for (let index in letter) {
    switch (letter[index].toUpperCase()) {
      case 'A':
        fraseCodificada += '@'
        break;
      case 'E':
        fraseCodificada += '3'
        break;
      case 'I':
        fraseCodificada += '!'
        break;
      case 'O':
        fraseCodificada += '0'
        break;
      case 'U':
        fraseCodificada += 'Ʉ'
        break;
      default:
        fraseCodificada += letter[index];
        break;
    }
  }
  return fraseCodificada
}

function decodeLetter(letter) {

  let fraseCodificada = '';

  for (let index in letter) {
    switch (letter[index].toUpperCase()) {
      case '@':
        fraseCodificada += 'a'
        break;
      case '3':
        fraseCodificada += 'e'
        break;
      case '!':
        fraseCodificada += 'i'
        break;
      case '0':
        fraseCodificada += 'o'
        break;
      case 'Ʉ':
        fraseCodificada += 'u'
        break;
      default:
        fraseCodificada += letter[index];
        break;
    }
  }
  return fraseCodificada
}

// Requisito 09

function sumAndMultiplyBy2(numbers) {

  let soma = 0;

  for (let value of numbers) {
    soma += value;
  }

  return soma * 2
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
