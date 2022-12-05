// Requisito 01

// const sameValues = (val1, val2) => (val1 >= 6, val2 < 6);
// console.log(sameValues(6,2));

// Requisito 02

// const convertToCm = (meter) => (meter *= 100);
// console.log(convertToCm(1));

// Requisito 03

// const dobroTriploRaiz = (numero) => (`O dobro de ${numero}  é ${numero * 2}, o triplo é ${numero *3} e a raiz quadrada é ${Math.sqrt(numero)}.`);

// console.log(dobroTriploRaiz(4));
 

// Requisito 04

 const createEmail = (fullName) => (`${fullName.replace(' ', '_').toLowerCase()}@aulao.com`);
 console.log(createEmail('raionara dantas'));


// Requisito 05

function getPoints(wins, ties) {
  // escreva seu codigo aqui
}

// // Requisito 06

// function sumMinMax(numbers) {
//   // escreva seu codigo aqui
// }

// // Requisito 07

// function polarEncoder(sentence) {
//   // escreva seu codigo aqui
// }

// // Requisito 08

// function encodeLetter(letter) {
//   // escreva seu codigo aqui
// }

// function decodeLetter(letter) {
//   // escreva seu codigo aqui
// }

// // Requisito 09

// function sumAndMultiplyBy2(numbers) {
//   // escreva seu codigo aqui
// }

// // Requisito 10

// function sumEvenNumbers(numbers) {
//   // escreva seu codigo aqui
// }

// function sumOddNumbers(numbers) {
//   // escreva seu codigo aqui
// }

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
