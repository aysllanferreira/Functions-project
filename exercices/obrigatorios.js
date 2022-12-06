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
  const mail = fullName.toLowerCase().split(' ').join('_');
  return `${mail}@aulao.com`;
}

// Requisito 05

function getPoints(wins, ties) {
  const win = wins * 7;
  const tie = ties * 3;
  return win + tie;
}

// Requisito 06

function sumMinMax(numbers) {
  const sumbiglow = Math.max(...numbers) + Math.min(...numbers);
  return sumbiglow;
}

// Requisito 07

function polarEncoder(sentence) {
  const sentLow = sentence.toLowerCase();
  const arrayZenit = sentLow.split('');
  let zenitCod = '';

  for (let index = 0; index < arrayZenit.length; index += 1) {
    if (arrayZenit[index] === 'z') {
      zenitCod += 'p';
    } else if (arrayZenit[index] === 'e') {
      zenitCod += 'o';
    } else if (arrayZenit[index] === 'n') {
      zenitCod += 'l';
    } else if (arrayZenit[index] === 'i') {
      zenitCod += 'a';
    } else if (arrayZenit[index] === 't') {
      zenitCod += 'r';
    } else if (arrayZenit[index] === 'p') {
      zenitCod += 'z';
    } else if (arrayZenit[index] === 'o') {
      zenitCod += 'e';
    } else if (arrayZenit[index] === 'l') {
      zenitCod += 'n';
    } else if (arrayZenit[index] === 'a') {
      zenitCod += 'i';
    } else if (arrayZenit[index] === 'r') {
      zenitCod += 't';
    } else {
      zenitCod += arrayZenit[index];
    }
  }
  return zenitCod;
}

// Requisito 08

function encodeLetter(letter) {
  const letraMaior = letter.toUpperCase();
  let enCode = '';
  for (let index = 0; index < letter.length; index += 1) {
    if (letraMaior[index] === 'A') {
      enCode += '@';
    } else if (letraMaior[index] === 'E') {
      enCode += '3';
    } else if (letraMaior[index] === 'I') {
      enCode += '!';
    } else if (letraMaior[index] === 'O') {
      enCode += '0';
    } else if (letraMaior[index] === 'U') {
      enCode += 'Ʉ';
    } else {
      enCode += letraMaior[index];
    }
  }
  return enCode;
}

function decodeLetter(letter) {
  const letraMenor = letter.toLowerCase();
  let enCode = '';
  for (let index = 0; index < letter.length; index += 1) {
    if (letraMenor[index] === '@') {
      enCode += 'a';
    } else if (letraMenor[index] === '3') {
      enCode += 'e';
    } else if (letraMenor[index] === '!') {
      enCode += 'i';
    } else if (letraMenor[index] === '0') {
      enCode += 'o';
    } else if (letraMenor[index] === 'Ʉ') {
      enCode += 'u';
    } else {
      enCode += letraMenor[index];
    }
  }
  return enCode;
}

// Requisito 09

function sumAndMultiplyBy2(numbers) {
  let sumArray = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    sumArray += numbers[index];
  }
  return sumArray * 2;
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
