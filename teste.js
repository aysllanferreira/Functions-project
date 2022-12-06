// function lowestNumber2(array) {
//   const minNumber = Math.min(...array);
//   let counter = 0;
//   array.forEach((e) => (e === minNumber ? (counter += 1) : (counter += 0)));

//   return counter;
// }
// console.log(lowestNumber2([1, 2, 3, 4, 5, 1, 7, 8, 9, 10]));

function encodeLetter(letter) {
  const letraMaior = letter;
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
}console.log(encodeLetter('eu sempre vou estar aqui'));