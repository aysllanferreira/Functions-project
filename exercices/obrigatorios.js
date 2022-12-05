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
  return meters * 100
}

// Requisito 03

function dobroTriploRaiz(numero) {
  // escreva seu codigo aqui
  const dobro = numero * 2;
  const triplo = numero * 3;
  const raiz = Math.sqrt(numero);

  return `O dobro de ${numero} é ${dobro}, o triplo é ${triplo} e a raiz quadrada é ${raiz}`
}

// Requisito 04

function createEmail(fullName) {
  // escreva seu codigo aqui
  return `${fullName.replace(' ', '_').toLowerCase()}@aulao.com`
}

// Requisito 05

function getPoints(wins, ties) {
  // escreva seu codigo aqui
  const result = (wins * 7) + (ties * 3);
  return result;
}

// Requisito 06

function sumMinMax(numbers) {
  // escreva seu codigo aqui
  const minNumber = Math.min(...numbers);
  const maxNumber = Math.max(...numbers);
  return minNumber + maxNumber;
}

// Requisito 07

function polarEncoder(sentence) {
  // escreva seu codigo aqui
  
  const convertSentence = sentence.toLowerCase().split('');
  const newSentence = [];
  
  for (let index = 0; index <= convertSentence.length; index += 1) {
    switch (convertSentence[index]) {
      case 'z':
        newSentence.push('p');
        break;
      case 'e':
        newSentence.push('o');
        break;
      case 'n':
        newSentence.push('l');
        break;
      case 'i':
        newSentence.push('a');
        break;
      case 't':
        newSentence.push('r');
        break;
      case 'p':
        newSentence.push('z');
        break;
      case 'o':
        newSentence.push('e');
        break;
      case 'l':
        newSentence.push('n');
        break;
      case 'a':
        newSentence.push('i');
        break;
      case 'r':
        newSentence.push('t');
        break;
      default:
        newSentence.push(convertSentence[index]);
    }
  }
  return newSentence.join('');
}

// Requisito 08

function encodeLetter(letter) {
  // escreva seu codigo aqui
  const convertLetter = letter.split('');
  const encoded = [];
  for (let i = 0; i <= convertLetter.length; i += 1) {
    switch (convertLetter[i]) {
      case 'a':
        encoded.push('@');
        break;
      case 'e':
        encoded.push('3');
        break;
      case 'i':
        encoded.push('!');
        break;
      case 'o':
        encoded.push('0');
        break;
      case 'u':
        encoded.push('Ʉ');
        break;
      default:
        encoded.push(convertLetter[i]);
    }
  }

  return encoded.join('');
}

function decodeLetter(letter) {
  // escreva seu codigo aqui
  const convertLetter = letter.split('');
  const decoded = [];
  for (let i = 0; i <= convertLetter.length; i += 1) {
    switch (convertLetter[i]) {
      case '@':
        decoded.push('a');
        break;
      case '3':
        decoded.push('e');
        break;
      case '!':
        decoded.push('i');
        break;
      case '0':
        decoded.push('o');
        break;
      case 'Ʉ':
        decoded.push('u');
        break;
      default:
        decoded.push(convertLetter[i]);
    }
  }

  return decoded.join('');
}

// Requisito 09

function sumAndMultiplyBy2(numbers) {
  // escreva seu codigo aqui
  let sum = 0;
  for(let index = 0; index < numbers.length; index +=1){
    sum += numbers[index];
  }
  return sum * 2;
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
