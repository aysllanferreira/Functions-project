// Requisito 01

function sameValues(val1, val2) {
  // escreva seu codigo aqui
  if (val1 >= 6 && val2 >= 6) {
    return true;
  } else {
    return false;
  }
}

// Requisito 02

function convertToCm(meters) {
  // escreva seu codigo aqui
  return meters * 100;
}

// Requisito 03

function dobroTriploRaiz(numero) {
  // escreva seu codigo aqui
  let dobro = numero * 2;
  let triplo = numero * 3;
  let raiz = Math.sqrt(numero);

  return `O dobro de ${numero} é ${dobro}, o triplo é ${triplo} e a raiz quadrada é ${raiz}`;
}
// console.log(dobroTriploRaiz(2));

// Requisito 04

function createEmail(fullName) {
  // escreva seu codigo aqui
  return `${fullName.replace(' ', '_').toLowerCase()}@aulao.com`;

}
// console.log(createEmail('Gabriel Cardiano'));

// Requisito 05

function getPoints(wins, ties) {
  // escreva seu codigo aqui
  return (wins * 7) + (ties * 3)
}
// Requisito 06

function sumMinMax(numbers) {
  // escreva seu codigo aqui
  return Math.max(...numbers) + Math.min(...numbers)
}

// Requisito 07

function polarEncoder(sentence) {
  // escreva seu codigo aqui
  const polar = sentence.toLowerCase().split('');
  const polarCode = [];

  for (index = 0; index < polar.length; index += 1) {

    switch (polar[index]) {
      case 'z': polarCode.push('p');
        break;
      case 'e': polarCode.push('o');
        break;
      case 'n': polarCode.push('l');
        break;
      case 'i': polarCode.push('a');
        break;
      case 't': polarCode.push('r');
        break;
      case 'p': polarCode.push('z');
        break;
      case 'o': polarCode.push('e');
        break;
      case 'l': polarCode.push('n');
        break;
      case 'a': polarCode.push('i');
        break;
      case 'r': polarCode.push('t');
        break;
      default: polarCode.push(polar[index]);
    }
  }
  return polarCode.join('')
}
// console.log(polarEncoder('Uma vez Flamengo, sempre Flamengo!'));
// console.log(polarEncoder('ZenIT POLar'));


// Requisito 08

function encodeLetter(letter) {
  // escreva seu codigo aqui
  const vocals = letter.toUpperCase().split('');
  const vocalsCode = [];

  for (i = 0; i < vocals.length; i += 1) {

    switch (vocals[i]) {
      case 'A': vocalsCode.push('@');
        break;
      case 'E': vocalsCode.push('3');
        break;
      case 'I': vocalsCode.push('!');
        break;
      case 'O': vocalsCode.push('0');
        break;
      case 'U': vocalsCode.push('Ʉ');
        break;
      default: vocalsCode.push(vocals[i]);
    }
  }
  return vocalsCode.join('')
}

// console.log(encodeLetter('Uma vez Flamengo, Flamengo até morrer!'));
// console.log(encodeLetter('AEIOU AEiou'));

function decodeLetter(letter) {
  // escreva seu codigo aqui
  return letter
    .replace(/@/gi, 'a')
    .replace(/3/gi, 'e')
    .replace(/!/gi, 'i')
    .replace(/0/gi, 'o')
    .replace(/Ʉ/gi, 'u')
    .replace(/@/gi, 'a')
}
// console.log(decodeLetter('@3!0Ʉ'));

// Requisito 09

function sumAndMultiplyBy2(numbers) {
  // escreva seu codigo aqui
  let sum = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    sum += numbers[index];
  }
  return sum * 2;
}
// console.log(sumAndMultiplyBy2([10, 15, 5, 30, 40]));


// Requisito 10

function sumEvenNumbers(numbers) {
  // escreva seu codigo aqui
  let sumEven = 0;

  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 === 0) {
      sumEven += numbers[index]
    }
  }
  return sumEven
}
// console.log(sumEvenNumbers([10, 15, 5, 30, 40]));

function sumOddNumbers(numbers) {
  // escreva seu codigo aqui
  let sumOdd = 0;

  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
      sumOdd += numbers[index]
    }
  }
  return sumOdd
}
// console.log(sumOddNumbers([10, 15, 5, 30, 40]));

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
