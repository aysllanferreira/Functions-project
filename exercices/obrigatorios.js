// Requisito 01

function sameValues(val1, val2) {
  // escreva seu codigo aqui
  return val1 >= 6 && val2 >= 6;
}

// Requisito 02

function convertToCm(meters) {
  // escreva seu codigo aqui
  return (meters * 100);
}

// Requisito 03

function dobroTriploRaiz(numero) {
  // escreva seu codigo aqui
  const dobro = numero * 2;
  const triplo = numero * 3;
  const raiz = numero ** 0.5;
  return `O dobro de ${numero} é ${dobro}, o triplo é ${triplo} e a raiz quadrada é ${raiz}`;
}

// Requisito 04

function createEmail(fullName) {
  // escreva seu codigo aqui
  let email = [];
  email = fullName.toLowerCase().split(' ').join('_');
  return `${email}@aulao.com`;
}

// Requisito 05

function getPoints(wins, ties) {
  // escreva seu codigo aqui
  return (wins * 7 + ties * 3);
}

// Requisito 06

function sumMinMax(numbers) {
  // escreva seu codigo aqui
  let maiorNumero = numbers[0];
  let menorNumero = numbers[0];
  for (let index = 0; index < numbers.length; index += 1) {
    if (menorNumero > numbers[index]) {
      menorNumero = numbers[index];
    }
    if (maiorNumero < numbers[index]) {
      maiorNumero = numbers[index];
    }
  }
  return (maiorNumero + menorNumero);
}

// Requisito 07

function polarEncoder(sentence) {
  // escreva seu codigo aqui
  let separar = [];
  separar = sentence.split('');
  for (let index = 0; index < separar.length; index += 1) {
    // eslint-disable-next-line default-case
    switch (separar[index].toString().toLowerCase('')) {
      case 'z':
        separar[index] = 'p';
        break;
      case 'e':
        separar[index] = 'o';
        break;
      case 'n':
        separar[index] = 'l';
        break;
      case 'i':
        separar[index] = 'a';
        break;
      case 't':
        separar[index] = 'r';
        break;
      case 'p':
        separar[index] = 'z';
        break;
      case 'o':
        separar[index] = 'e';
        break;
      case 'l':
        separar[index] = 'n';
        break;
      case 'a':
        separar[index] = 'i';
        break;
      case 'r':
        separar[index] = 't';
        break;
    }
  }
  separar = separar.join('');
  return separar.toString().toLowerCase('');
}

// Requisito 08

function encodeLetter(letter) {
  // escreva seu codigo aqui
  let separa = [];
  separa = letter.split('');
  for (let index = 0; index < separa.length; index += 1) {
    // eslint-disable-next-line default-case
    switch (separa[index].toString().toLowerCase('')) {
      case 'a':
        separa[index] = '@';
        break;
      case 'e':
        separa[index] = '3';
        break;
      case 'i':
        separa[index] = '!';
        break;
      case 'o':
        separa[index] = '0';
        break;
      case 'u':
        separa[index] = 'Ʉ';
        break;
    }
  }
  separa = separa.join('');
  return separa;
}

function decodeLetter(letter) {
  // escreva seu codigo aqui
  let separa = [];
  separa = letter.split('');
  for (let index = 0; index < separa.length; index += 1) {
    // eslint-disable-next-line default-case
    switch (separa[index]) {
      case '@':
        separa[index] = 'a';
        break;
      case '3':
        separa[index] = 'e';
        break;
      case '!':
        separa[index] = 'i';
        break;
      case '0':
        separa[index] = 'o';
        break;
      case 'Ʉ':
        separa[index] = 'u';
        break;
    }
  }
  separa = separa.join('');
  return separa;
}

// Requisito 09

function sumAndMultiplyBy2(numbers) {
  // escreva seu codigo aqui
  let soma = 0;
  for (let index of numbers) {
    soma += index;
  }
  return (soma * 2);
}

// Requisito 10

function sumEvenNumbers(numbers) {
  // escreva seu codigo aqui
  let soma = 0;
  for (let index of numbers) {
    if (index%2 == 0) {
      soma += index;
    }
  }
  return soma;
}

function sumOddNumbers(numbers) {
  // escreva seu codigo aqui
  let soma = 0;
  for (let index of numbers) {
    if (index%2 != 0) {
      soma += index;
    }
  }
  return soma;
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
