// Requisito 01

const sameValues = (val1, val2) => (val1 >= 6, val2 < 6);
console.log(sameValues(6,2));

// Requisito 02

const convertToCm = (meter) => (meter *= 100);
console.log(convertToCm(1));

// Requisito 03

const dobroTriploRaiz = (numero) => (`O dobro de ${numero}  é ${numero * 2}, o triplo é ${numero *3} e a raiz quadrada é ${Math.sqrt(numero)}.`);

console.log(dobroTriploRaiz(4));
 

// Requisito 04

 const createEmail = (fullName) => (`${fullName.replace(' ', '_').toLowerCase()}@aulao.com`);
 console.log(createEmail('raionara dantas'));


// Requisito 05

const getPoints = (wins, ties) => (wins * 7) + (ties * 3);

console.log(((2) * 7) + ((2) * 3));

// // Requisito 06

const sumMinMax = (numbers) => Math.max(...numbers) + (Math.min(...numbers));
console.log(sumMinMax([3, 2, 5, 4, 7]));

// Requisito 07
// A partir da linha 40, faz um console.log e, no code, cria um array. Por isso faz um um for

// const polarEncoder = (sentence) => sentence.toLowerCase().split('');

//   for (let index = 0; index < sentence.length; index += 1) {
//     console.log(sentence[index]);
//   }

// console.log(polarEncoder('Brasil, hexa!'));

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
